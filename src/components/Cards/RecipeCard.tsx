import { useToggle } from "../../functions/customHooks/useToggle";
import { Recipe } from "../../types/appTypes";
import { AddRecipeForm } from "../Form/AddRecipeForm";
import { Modal } from "../Modal";

type Props = {
    recipe: Recipe
};

export const RecipeCard = ({
    recipe
}: Props) => {
    const [isOpen, toggle] = useToggle();

    return (
        <>
            <div 
                className="shrink-0 grow max-w-[160px] md:max-w-[250px] xl:max-w-[300px] bg-white pb-4 px-3 rounded-md"
            >
                <img style={{width: '100%', height: 'auto', transform: 'translateY(-10px)', borderRadius: '4px'}} src={recipe.strMealThumb} />
                <div className="py-2 font-semibold flex flex-row justify-between items-center">
                    <div>{recipe.strMeal}</div>
                    <button onClick={toggle} className="border border-yellow-600 text-yellow-600 px-3 py-2">
                        +
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={toggle}>
                <AddRecipeForm
                    onClose={toggle}
                    recipe={recipe}
                />
            </Modal>
        </>
    )
}
