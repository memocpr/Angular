import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class DataStorageService{

    constructor(private http:HttpClient, private recipeService:RecipeService){}

    storageRecipes(){
        const recipes=this.recipeService.getRecipes();
        this.http.put('https://angular-cdb0a-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(
            response=>{
                console.log(response);
            }
        );
    }

    fetchRecipes(){
       return this.http.get<Recipe[]>('https://angular-cdb0a-default-rtdb.firebaseio.com/recipes.json')
        ;
    }
}