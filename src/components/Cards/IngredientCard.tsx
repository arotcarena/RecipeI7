import { useDispatch, useSelector } from "react-redux";
import { resolveIngredientThumbnail } from "../../functions/ingredientThumbnailResolver";
import { Ingredient, Recipe } from "../../types/appTypes"
import { deleteIngredient } from "../../features/ingredientSlice";
import { useToggle } from "../../functions/customHooks/useToggle";
import { Modal } from "../Modal";
import { IngredientUpdateForm } from "../Form/IngredientUpdateForm";

type Props = {
    ingredient: Ingredient
};

export const IngredientCard = ({
    ingredient
}: Props) => {
    const recipes: Recipe[] = useSelector((state: any) => state.recipes.value);
    const recipesHavingIngredient: string[] = recipes.filter((recipe: any) => {
        return recipe.ingredients.find((i: any) => i === ingredient.name) ? true: false;
    }).map(recipe => recipe.name);

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteIngredient(ingredient.name));
    }
    const [isOpen, toggleOpen] = useToggle(false);

    return (
        <div 
            className="shrink-0 grow max-w-[120px] md:max-w-[200px] bg-white pb-4 px-3 rounded-md"
        >
            <img style={{width: '100%', height: 'auto', borderRadius: '4px'}} src={resolveIngredientThumbnail(ingredient.name)} />
            <div className="py-2 font-semibold">
                <div className="text-center">{ingredient.name} - {ingredient.quantity}</div>
                <div className="font-normal text-sm text-center">{ingredient.consoDate}</div>
                <div className="text-center text-sm font-normal">
                    recettes : {recipesHavingIngredient.join(', ')}
                </div>
                <button className="w-full" onClick={toggleOpen} type="button">modifier</button>
                <button className="w-full" onClick={handleDelete} type="button">supprimer</button>
            </div>
            {
                isOpen && (
                    <Modal isOpen={isOpen} onClose={toggleOpen}>
                        <IngredientUpdateForm ingredient={ingredient} onClose={toggleOpen} />
                    </Modal>
                )
            }
        </div>
    )
};
