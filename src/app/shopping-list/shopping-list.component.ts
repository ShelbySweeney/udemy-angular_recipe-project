import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('ingState', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(2000, keyframes([
          style({
            opacity: 0,
            offset: 0
          }),
          style({
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            opacity: 1,
            offset: 0.5
          }),
          style({
            opacity: 1,
            offset: 0.7,
            'font-weight': 'bold'
          }),
          style({
            opacity: 1,
            offset: 0.8,
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
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditIngredient(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }

  ngOnDestroy(): void {}

}
