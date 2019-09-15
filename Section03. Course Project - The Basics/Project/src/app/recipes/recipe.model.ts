export class Recipe {
  // Set up variables with its types.
  public name: string;
  public description: string;
  public imagePath: string;

  // From now we can initialize it with the new keyword.
  constructor(name: string, desc:string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}