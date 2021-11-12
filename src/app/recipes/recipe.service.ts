import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe name', 'This is desc of recipe', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Long_Beach_Tea_Recipe.jpg',
      [
        new Ingredient('Lemongrass & Ginger ', 1),
        new Ingredient('Iced coffee ', 2),
      ]),
    new Recipe('A Second Test Recipe name *', 'This is second desc of recipe', 'https://image.freepik.com/free-vector/tea-menu-template-beverages-list_23-2147861221.jpg',
      [
        new Ingredient('Masala', 3),
        new Ingredient('Spiced milk', 6),
      ]),
    new Recipe('An Another Test Recipe name $', 'This is another desc of recipe', 'https://image.freepik.com/free-vector/tea-menu-template-with-beverages-list_23-2147868387.jpg',
      [
        new Ingredient('Cinnamon', 4),
        new Ingredient('Cardamom and ginger.', 5),
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
