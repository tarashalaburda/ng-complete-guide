import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 8)
  ]

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const foundRecipe = this.ingredients.find(elem => JSON.stringify(elem) === JSON.stringify(ingredient))
    if (foundRecipe == null) {
      this.ingredients.push(ingredient)
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
  }

  addNewIngredients(ingredients: Ingredient[]) {
    // method below have a lot of unnecessary event emissions
    /*    for (let newIngredient of ingredients) {
          this.addIngredient(newIngredient);
        }*/

    // best method with spread
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
