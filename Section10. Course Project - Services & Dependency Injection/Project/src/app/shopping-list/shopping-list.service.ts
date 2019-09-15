import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); // Return copy of ingredients, so they can't access original array.
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient); // Add ingredient to the ingredients array.
    this.ingredientsChanged.emit(this.ingredients.slice()); // Emit event for changed ingredients returning just copy of ingredients, not original array.
  }

  addIngredients(ingredients: Ingredient[]) {
    // Loop through all ingredients.
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient); // Add ingredient.
    // }

    // Directly add all ingredients in all goal and then emit event.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice()); // Emit copy of ingredients.
  }
}