import { createListenerMiddleware } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import { Ingredient } from "../../types/appTypes";
import { deleteIngredient } from "../../features/ingredientSlice";

const recipeDeleteListener = createListenerMiddleware();

recipeDeleteListener.startListening({
    type: 'recipes/deleteRecipe',
    effect: (action: any, listenerApi: any) => {
        const state: any = listenerApi.getState();
        console.log(state.ingredients.value);
        const ingredients: Ingredient[] = state.ingredients.value;
        for(const i of ingredients) {
            if(i.recipeNames.length === 1 && i.recipeNames[0] === action.payload) {
                listenerApi.dispatch(deleteIngredient(i.name));
            }
        }
    }
});

export default recipeDeleteListener.middleware;
