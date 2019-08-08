import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  animations: [
    trigger('isAddedState', [
      state('false', style({
        opacity: 0
      })),
      state('true', style({
        opacity: 1
      })),
      transition('true => false', animate(1)),
      transition('false => true', [
        animate(2000, keyframes([
          style({
            opacity: 0,
            offset: 0
          }),
          style({
            opacity: 0.5,
            offset: 0.2
          }),
          style({
            opacity: 1,
            offset: 0.35
          }),
          style({
            opacity: 1,
            offset: 0.5,
            'font-weight': 'bold'
          }),
          style({
            opacity: 1,
            offset: 0.7,
            'font-weight': 'normal'
          }),
          style({
            opacity: 1,
            offset: 0.9,
            'font-weight': 'bold'
          }),
          style({
            opacity: 1,
            offset: 1,
            'font-weight': 'normal'
          })
        ]))
      ])
    ])
  ]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  isAdded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.route.params.pipe(map(params => {
      return +params['id'];
    }), switchMap(id => {
      this.id = id;
      return this.store.select('recipes');
    }),
    map(recipesState => {
      return recipesState.recipes.find((recipe, index) => {
        return index === this.id;
      });
    }))
    .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    this.isAdded = true;
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

  onAnimateComplete(event) {
    this.isAdded = false;
  }

}
