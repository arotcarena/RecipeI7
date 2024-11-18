import { Category, Recipe } from "../../types/appTypes";
import { fetchGet } from "./customFetch";

export const apiSearchMealByName = async (name: string): Promise<Recipe[]> => {
    const data = await fetchGet<{meals: Recipe[]}>('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);
    return data.meals ?? [];
};

export const apiListAllMealsByFirstLetter = (firstLetter: string): Promise<any> => {
    return fetchGet('https://www.themealdb.com/api/json/v1/1/search.php?f=' + firstLetter);
};

export const apiLookFullMealDetailsById = (id: number): Promise<any> => {
    return fetchGet('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
};

export const apiLookupASingleRandomMeal = (): Promise<any> => {
    return fetchGet('https://www.themealdb.com/api/json/v1/1/random.php');
};

export const apiListAllMealCategories = async (): Promise<Category[]> => {
    const data = await fetchGet<{categories: Category[]}>('https://www.themealdb.com/api/json/v1/1/categories.php');
    return data.categories;
};

export const apiFilterByMainIngredient = (mainIngredient: string): Promise<any> => {
    return fetchGet('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + mainIngredient);
};

export const apiFilterByCategory = async (category: string): Promise<Recipe[]> => {
    const data = await fetchGet<{meals: Recipe[]}>('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category);
    return data.meals;
};

export const apiFilterByArea = (area: string): Promise<any> => {
    return fetchGet('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + area);
};
