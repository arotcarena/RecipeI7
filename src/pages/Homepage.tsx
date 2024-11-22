import { RecipesList } from "../components/RecipesList";
import { Category } from "../types/appTypes";
import { useGlobalStore } from "../context/GlobalStoreProvider";
import { useListAllMealCategoriesQuery } from "../features/apiSlice";

export const Homepage = () => {

    // retrieve categories
    const {data} = useListAllMealCategoriesQuery<any>(null);

    // handle category selection
    const {selectedCategory, setSelectedCategory} = useGlobalStore();
    const handleSelect = (category: Category) => {
        setSelectedCategory(category);
    }

    return (
        <div
            className="bg-gray-200 py-5"
        >
            <div className="hidden xl:block max-w-[1200px] m-auto bg-white rounded-2xl mt-4 mb-5 py-4 px-5">
                {
                    data?.categories.map((category: Category, index: number) => (
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
