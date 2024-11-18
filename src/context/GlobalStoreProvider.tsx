import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Recipe } from "../types/appTypes";

type GlobalStoreContextType = {
    recipesList: Recipe[],
    setRecipesList: React.Dispatch<React.SetStateAction<Recipe[]>>,
};

export const GlobalStoreContext = createContext<GlobalStoreContextType|null>(null);

type Props = PropsWithChildren<{}>;

export const GlobalStoreProvider = ({
    children
}: Props) => {
    const [recipesList, setRecipesList] = useState<Recipe[]>([]);

    return (
        <GlobalStoreContext.Provider value={{
            recipesList,
            setRecipesList,
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
