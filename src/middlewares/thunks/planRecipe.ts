import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { Recipe } from "../../types/appTypes";
import { addRecipe } from "../../features/recipeSlice";
import { addIngredient } from "../../features/ingredientSlice";
import { addEvent } from "../../features/eventSlice";

export const planRecipe = (recipe: Recipe, consoDate: string): any => (
  (dispatch: Dispatch<UnknownAction>) => {
        // add each ingredient
        let ingredientNames: string[] = [];
        for(let i = 1; i <= 20; i++) {
            if(recipe['strIngredient' + i]) {
                const name = recipe['strIngredient' + i];
                const quantity = recipe['strMeasure' + i];
                dispatch(addIngredient({name, quantity, consoDate, recipeNames: [recipe.strMeal]}));
                ingredientNames.push(name);
            }
        }
        // add recipe
        dispatch(addRecipe({
            ingredients: ingredientNames,
            id: recipe.idMeal,
            name: recipe.strMeal,
            consoDate,
        }));
        // add event
        dispatch(addEvent({recipe, consoDate}));
  }
);
