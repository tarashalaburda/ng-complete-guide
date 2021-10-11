import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe name', 'This is desc of recipe', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Long_Beach_Tea_Recipe.jpg'),
    new Recipe('A Test Recipe name', 'This is desc of recipe', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Long_Beach_Tea_Recipe.jpg'),
    new Recipe('A Test Recipe name', 'This is desc of recipe', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Long_Beach_Tea_Recipe.jpg'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
