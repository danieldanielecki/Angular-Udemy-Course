import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
  // Set up variables with its types.
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // From now we can initialize it with the new keyword.
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}