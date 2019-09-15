import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe; // Bind Recipe component from outside.
  @Output() recipeSelected = new EventEmitter<void>(); // Set event emitter with output to make it bindable from outside.

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
