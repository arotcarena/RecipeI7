import { configureStore } from "@reduxjs/toolkit";
import ingredientSlice from "../features/ingredientSlice";
import recipeSlice from "../features/recipeSlice";
import eventSlice from "../features/eventSlice";

export const store = configureStore({
    reducer: {
        ingredients: ingredientSlice,
        recipes: recipeSlice,
        events: eventSlice,
    }
});
