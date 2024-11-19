import { useSelector } from "react-redux"
import { Ingredient } from "../types/appTypes";
import { useMemo } from "react";
import { sortByProperty } from "../functions/sortByProperty";
import { IngredientCard } from "../components/Cards/IngredientCard";

export const Courses = () => {

    let ingredients = useSelector((state: any) => state.ingredients.value);

    const sortedIngredients: Ingredient[] = useMemo(() => {
        return sortByProperty(ingredients, 'consoDate', true);
    }, [ingredients]);

    return (
        <div
            className="flex flew-row justify-center flex-wrap py-5 px-4 gap-x-4 gap-y-5 md:gap-y-6 mx-auto"
            style={{width: '100%', maxWidth: '1200px'}}
        >
                {
                    (sortedIngredients ?? ingredients).map((ingredient: Ingredient, index: number) => (
                        <IngredientCard key={index} ingredient={ingredient} />
                    ))  
                }
        </div>
    )
}
