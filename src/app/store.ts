import { configureStore } from "@reduxjs/toolkit";
import ingredientSlice from "../features/ingredientSlice";
import recipeSlice from "../features/recipeSlice";
import eventSlice from "../features/eventSlice";
import recipeDeleteListener from "../middlewares/listeners/recipeDeleteListener";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        ingredients: ingredientSlice,
        recipes: recipeSlice,
        events: eventSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware: any) => (
        getDefaultMiddleware().prepend(recipeDeleteListener).concat(apiSlice.middleware)
    )
});
