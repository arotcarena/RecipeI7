import { useEffect, useState } from "react";
import { RecipesList } from "../components/RecipesList";
import { apiFilterByCategory, apiListAllMealCategories } from "../functions/api/apiQueries";
import { Category } from "../types/appTypes";
import { useGlobalStore } from "../context/GlobalStoreProvider";

export const Homepage = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        (async () => {
            const categoriesFetched = await apiListAllMealCategories();
            setCategories(categoriesFetched);
        })();
    }, []);

    const [selectedCategory, setSelectedCategory] = useState<Category|null>(null);
    const handleSelect = (category: Category) => {
        setSelectedCategory(category);
    }

    const {setRecipesList} = useGlobalStore();
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

    return (
        <div
            className="bg-gray-200 py-5"
        >
            <div className="hidden xl:block max-w-[1200px] m-auto bg-white rounded-2xl mt-4 mb-5 py-4 px-5">
                {
                    categories.map((category: Category, index: number) => (
                        <button
                            className={'py-2 px-5 rounded-2xl' + (selectedCategory === category ? ' border border-yellow-600 text-yellow-600': '')}
                            key={index}
                            type="button"
                            onClick={() => handleSelect(category)}
                        >
                            {category.strCategory}
                        </button>
                    ))
                }
            </div>
            <RecipesList />
        </div>
    )
}
