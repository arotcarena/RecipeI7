import { ReactNode } from "react"

export type AppRoute = {
    path: string,
    element: ReactNode,
    label: string,
};

export type Recipe = {
    idMeal: number,
    strMeal: string,
    strArea: string,
    strCategory: string,
    strMealThumb: string,
    [key: string]: any,
};

export type StoredRecipe = {
    id: number,
    name: string,
    ingredients: string[],
    consoDate: string,
};

export type Category = {
    idCategory: number,
    strCategory: string,
    strCategoryDescription: string,
    strCategoryThumb: string,
};

export type Ingredient = {
    name: string,
    quantity: string,
    consoDate: string,
};
