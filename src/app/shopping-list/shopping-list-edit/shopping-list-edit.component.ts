import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: false}) nameIn: ElementRef;
  @ViewChild('amountInput', {static: false}) amountIn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameIn.nativeElement.value;
    const ingAmount = this.amountIn.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }


}
