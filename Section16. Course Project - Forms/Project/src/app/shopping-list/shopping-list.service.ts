import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); // Return copy of ingredients, so they can't access original array.
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient); // Add ingredient to the ingredients array.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Loop through all ingredients.
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient); // Add ingredient.
    // }

    // Directly add all ingredients in all goal and then emit event.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice()); // Pass copy of ingredients.
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice()); // Pass copy of ingredients.
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1); // Start at specific point (index) and splice 1 element does removing it.
    this.ingredientsChanged.next(this.ingredients.slice()); // Pass copy of ingredients.
  }
}