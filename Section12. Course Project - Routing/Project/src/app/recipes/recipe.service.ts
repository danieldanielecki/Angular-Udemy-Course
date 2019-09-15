import { Recipe } from './recipe.model'
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

// Needed to inject service to service.
@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  // Array of recipes.
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'http://assets-jpcust.jwpsrv.com/thumbs/tjNwoclK-720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  // Inject ShoppingListService.
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // Return new array, which is the exact copy of array in service array. So therefore we really can't access the array from outside. We only get a copy.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}