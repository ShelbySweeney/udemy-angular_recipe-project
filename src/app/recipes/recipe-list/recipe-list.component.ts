import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Second Recipe', 'Description of 2nd recipe', 'https://static01.nyt.com/images/2014/09/02/dining/shakshuka/shakshuka-superJumbo-v2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(reci: Recipe) {
    this.recipeWasSelected.emit(reci);
  }

}
