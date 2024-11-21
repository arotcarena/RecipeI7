import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Recipe } from "../../types/appTypes";
import { useDispatch } from "react-redux";
import { planRecipe } from "../../middlewares/thunks/planRecipe";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

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
        dispatch(planRecipe(recipe, consoDate));
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
