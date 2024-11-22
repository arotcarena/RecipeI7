import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Category } from "../types/appTypes";
import { useFilterByCategoryQuery, useSearchMealByNameQuery } from "../features/apiSlice";

type GlobalStoreContextType = {
    recipes: any[],
    setRecipes: React.Dispatch<React.SetStateAction<any[]>>,
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
    const [q, setQ] = useState<string>('');
    const [recipes, setRecipes] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category|null>(null);

    // on q change, search recipes
    const {data: recipesSearchedByName = []} = useSearchMealByNameQuery<any>(q);
    const {data: recipesSearchedByCategory = []} = useFilterByCategoryQuery<any>(selectedCategory?.strCategory);
 
    useEffect(() => {
        setRecipes(recipesSearchedByCategory?.meals ?? []);
    }, [recipesSearchedByCategory]);
    
    useEffect(() => {
        setRecipes(recipesSearchedByName?.meals ?? []);
    }, [recipesSearchedByName]);


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
            recipes,
            setRecipes,
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
