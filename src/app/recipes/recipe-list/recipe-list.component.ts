import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe name', 'This is desc of recipe', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Long_Beach_Tea_Recipe.jpg'),
    new Recipe('A Second Test Recipe name *', 'This is second desc of recipe', 'https://image.freepik.com/free-vector/tea-menu-template-beverages-list_23-2147861221.jpg'),
    new Recipe('An Another Test Recipe name $', 'This is another desc of recipe', 'https://image.freepik.com/free-vector/tea-menu-template-with-beverages-list_23-2147868387.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
