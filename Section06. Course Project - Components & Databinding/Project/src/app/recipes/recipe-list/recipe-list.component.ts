import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); // Set event emitter and make it listenable from outside.

  // Array of recipes.
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe); // Emit recipe.
  }

}
