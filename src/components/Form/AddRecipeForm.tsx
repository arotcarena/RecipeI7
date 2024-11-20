import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Ingredient, Recipe } from "../../types/appTypes";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addIngredient } from "../../features/ingredientSlice";
import { addRecipe } from "../../features/recipeSlice";
import { addEvent } from "../../features/eventSlice";

type Props = {
    recipe: Recipe,
    onClose: () => void,
};

export const AddRecipeForm = ({
    recipe,
    onClose,
}: Props) => {

    const defaultDate = new Date();

    const dispatch = useDispatch();

    const handleChange = (selectedDateString: any) => {
        const consoDate = (new Date(selectedDateString)).toLocaleDateString();
        let ingredientNames: string[] = [];
        // add each ingredient
        for(let i = 1; i <= 20; i++) {
            if(recipe['strIngredient' + i]) {
                const name = recipe['strIngredient' + i];
                const quantity = recipe['strMeasure' + i];
                dispatch(addIngredient({name, quantity, consoDate}));
                ingredientNames.push(name);
            }
        }
        // add recipe
        dispatch(addRecipe({
            ingredients: ingredientNames,
            id: recipe.idMeal,
            name: recipe.strMeal,
            consoDate,
        }));
        // add event
        dispatch(addEvent({recipe, consoDate}));
        onClose();
    }

    return (
        <div>
            <h2>Pour quand prévoyez-vous cette recette ?</h2>
            <div className="m-4">
                <DatePicker selected={defaultDate} onChange={handleChange} />
            </div>
        </div>
    )
}
