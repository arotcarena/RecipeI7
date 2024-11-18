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
};

export type Category = {
    idCategory: number,
    strCategory: string,
    strCategoryDescription: string,
    strCategoryThumb: string,
};
