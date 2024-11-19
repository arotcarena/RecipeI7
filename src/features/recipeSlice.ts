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
        resetRecipes: (state: RecipeState) => {
            state.value = [];
        },
    },
});

export const {addRecipe, resetRecipes} = recipeSlice.actions;

export default recipeSlice.reducer;
