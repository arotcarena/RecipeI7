import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Category, Recipe } from "../types/appTypes";
import { apiFilterByCategory, apiSearchMealByName } from "../functions/api/apiQueries";
import { useQSearch } from "../functions/customHooks/useQSearch";

type GlobalStoreContextType = {
    recipesList: Recipe[],
    setRecipesList: React.Dispatch<React.SetStateAction<Recipe[]>>,
    q: string,
    setQ: React.Dispatch<React.SetStateAction<string>>,
    selectedCategory: Category|null,
    setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>,
};

export const GlobalStoreContext = createContext<GlobalStoreContextType|null>(null);

type Props = PropsWithChildren<{}>;

export const GlobalStoreProvider = ({
    children
}: Props) => {
    const [recipesList, setRecipesList] = useState<Recipe[]>([]);
    const [q, setQ] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<Category|null>(null);

    // on q change, search recipes
    const {data: recipes} = useQSearch<Recipe>(
        apiSearchMealByName,
        q
    );
    useEffect(() => {
        setRecipesList(recipes);
    }, [recipes]);

    // on category select
    useEffect(() => {
        (async () => {
            if(selectedCategory) {
                (async () => {
                    const recipesFetched = await apiFilterByCategory(selectedCategory.strCategory);
                    setRecipesList(recipesFetched);
                })();
            }
        })();
    }, [selectedCategory]);

    // if search by category, empty q search field
    useEffect(() => {
        if(selectedCategory !== null && q !== '') {
            setQ('');
        }
    }, [selectedCategory]);

    // if search by q, deselect category
    useEffect(() => {
        if(q !== '' && selectedCategory !== null) {
            setSelectedCategory(null);
        }
    }, [q]);

    return (
        <GlobalStoreContext.Provider value={{
            recipesList,
            setRecipesList,
            q,
            setQ,
            selectedCategory,
            setSelectedCategory,
        }}>
            { children }
        </GlobalStoreContext.Provider>
    )
};

export const useGlobalStore = (): GlobalStoreContextType => {
    const globalStoreContext = useContext(GlobalStoreContext);
    if(!globalStoreContext) {
        throw new Error('To use globalStore, you must wrap your component with GlobalStoreProvider');
    }
    return globalStoreContext;
}
