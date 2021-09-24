import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    constructor(private slService:ShoppinListService){

    }

    recipeSelected=new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('meat', 1), new Ingredient('salt',2)]),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('chicken', 2), new Ingredient('salt', 2)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      addIngsToShopList(ings:Ingredient[]){

        this.slService.addIngredients(ings);

      }
    
}