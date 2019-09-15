import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; // Add nameInput reference.
  @ViewChild('amountInput') amountInputRef: ElementRef; // Add amountInput reference.
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); // Make it listenable from outside.

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // "const" used instead of let, because it's not going to be changed.
    const ingName = this.nameInputRef.nativeElement.value; // Get ingredient name from input.
    const ingAmount = this.amountInputRef.nativeElement.value; // Get ingredient amount from input.
    const newIngredient = new Ingredient(ingName, ingAmount); // Create new ingredient.
    this.ingredientAdded.emit(newIngredient); // Emit event.
  }

}
