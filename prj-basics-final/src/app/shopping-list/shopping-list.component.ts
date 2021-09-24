import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppinglistSer:ShoppinListService) { }

  ngOnInit() {
    this.ingredients=this.shoppinglistSer.getIngredient();
    this.shoppinglistSer.ingredientsChanged.subscribe(
        (ings:Ingredient[])=>{
            this.ingredients=ings;
        }
    )
  }

}
