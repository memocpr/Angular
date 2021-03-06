
import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.action";

export interface State {
    ingredients:Ingredient[];
    editedIngredient:Ingredient;
    editedIngredientIndex:number;
}

export interface AppState{
    shoppingList:State;
}

const initialState:State={
    ingredients:[
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient:null,
    editedIngredientIndex:-1,
}

export function shoppingListReducer(state:State = initialState, action: ShoppingListActions.ShoppingListActions){

    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };

        case ShoppingListActions.ADD_INGREDIENTS:
            return{
                ...state,
                ingredients:[...state.ingredients, ...action.payload]
            };
        default:
            return state;
    }

}