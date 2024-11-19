import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient } from "../types/appTypes";

type IngredientState = {
    value: Ingredient[]
};

const initialState: IngredientState = {
    value: []
};

const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addIngredient: (state: IngredientState, action: PayloadAction<Ingredient>) => {
            const {name, quantity, consoDate} = action.payload;
            const existingIngredient = state.value.find((ingredient: Ingredient) => ingredient.name === name);
            if(existingIngredient) {
                let existingQuantityCount = parseInt(existingIngredient.quantity.split(' ')[0]);
                let addQuantityCount = parseInt(quantity.split(' ')[0]);
                existingIngredient.quantity = existingQuantityCount + addQuantityCount + ' ' + existingIngredient.quantity.split(' ')[1];
                if(existingIngredient.consoDate > consoDate) {
                    existingIngredient.consoDate = consoDate;
                }
            } else {
                state.value.push({name, quantity, consoDate});
            }
        },
        updateIngredient: (state: IngredientState, action: PayloadAction<{ingredientName: string, data: Ingredient}>) => {
            state.value = state.value.map((i: Ingredient) => {
                if(i.name === action.payload.ingredientName) {
                    return action.payload.data;
                }
                return i;
            });
        },
        deleteIngredient: (state: IngredientState, action: PayloadAction<string>) => {
            state.value = state.value.filter((i: Ingredient) => i.name !== action.payload);
        },
        resetIngredients: (state: IngredientState) => {
            state.value = [];
        },
    },
});

export const {addIngredient, updateIngredient, deleteIngredient, resetIngredients} = ingredientSlice.actions;

export default ingredientSlice.reducer;
