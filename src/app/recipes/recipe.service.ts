import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Pork ribs',
      'Dry rub pork ribs and salad',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Pork', 1),
        new Ingredient('Black Pepper', 10)
      ]),
    new Recipe(
      'Fried egg casserole',
      'Fried eggs in a skillet with marinara and Italian herbs',
      'https://static01.nyt.com/images/2014/09/02/dining/shakshuka/shakshuka-superJumbo-v2.jpg',
      [
        new Ingredient('Eggs', 5),
        new Ingredient('Cilantro', 7),
        new Ingredient('Tomatoes', 11)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
