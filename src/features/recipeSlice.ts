import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoredRecipe } from "../types/appTypes";

type RecipeState = {
    value: StoredRecipe[]
};

const initialState: RecipeState = {
    value: []
};

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state: RecipeState, action: PayloadAction<{
            ingredients: string[],
            id: number,
            name: string,
            consoDate: string,
        }>) => {
            state.value.push(action.payload);
        },
        updateRecipeDate: (state: RecipeState, action: PayloadAction<{
            id: number,
            newDate: string,
        }>) => {
            state.value = state.value.map((recipe: StoredRecipe) => {
                if(recipe.id === action.payload.id) {
                    return {...recipe, consoDate: action.payload.newDate};
                }
                return recipe;
            });
        },
        resetRecipes: (state: RecipeState) => {
            state.value = [];
        },
        deleteRecipe: (state: RecipeState, action: PayloadAction<string>) => {
            state.value = state.value.filter((recipe: StoredRecipe) => recipe.name !== action.payload);
        },
    },
});

export const {addRecipe, resetRecipes, updateRecipeDate, deleteRecipe} = recipeSlice.actions;

export default recipeSlice.reducer;
