
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppinListService{

    ingredientsChanged=new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];


      getIngredient(){
        return  this.ingredients.slice();
      }


      addIngredient(ingredient:Ingredient){

        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice()); 

      }

      addIngredients(ings:Ingredient[]){

        /* for(let oneIng of ings){
            this.addIngredient(oneIng);
        } */

        this.ingredients.push(...ings);
        this.ingredientsChanged.emit(this.ingredients.slice());

      }


    
}