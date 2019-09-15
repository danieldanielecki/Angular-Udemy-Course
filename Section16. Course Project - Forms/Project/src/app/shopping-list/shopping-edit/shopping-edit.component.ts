import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    // "const" used instead of let, because it's not going to be changed.
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount); // Create new ingredient.

    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    // Reset form.
    this.editMode = false;
    form.reset();
  }

  // Clear the form.
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  // Inform the service to remove one of the items in the array.
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear(); // Clear the form.
  }

  ngOnDestroy() {
   this.subscription.unsubscribe(); // Clean up the subscription to avoid memory leak.
  }
}
