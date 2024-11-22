import { useGlobalStore } from "../../context/GlobalStoreProvider";
import { RecipeCard } from "../Cards/RecipeCard";

export const RecipesList = () => {
    
    const {recipes} = useGlobalStore();

    return (
        <div
            className="flex flew-row justify-center flex-wrap py-5 px-4 gap-x-4 gap-y-5 md:gap-y-6 mx-auto"
            style={{width: '100%', maxWidth: '1200px'}}
        >
            {
                recipes.map((recipe: any, index: number) => (
                        <RecipeCard
                            key={index}
                            recipe={recipe}
                        />
                ))
            }
        </div>
    )
}
