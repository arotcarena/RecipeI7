import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { updateEventDate } from "../../features/eventSlice";
import { updateRecipeDate } from "../../features/recipeSlice";
import { StoredRecipe } from "../../types/appTypes";
import { updateIngredientDate } from "../../features/ingredientSlice";

export const EventUpdateForm = ({event, onClose}: {event: {id: string, title: string, date: any}, onClose: () => void,}) => {
    const dispatch = useDispatch();
    
    const recipe: StoredRecipe = useSelector((state: any) => state.recipes.value).find((recipe: StoredRecipe) => recipe.name === event.title);

    const handleChange = (selectedDateString: any) => {
        const newDate = (new Date(selectedDateString)).toLocaleDateString();
        // changer la date de l'event
        dispatch(updateEventDate({recipe: event.title, newDate}));
        // changer la consoDate de la recipe
        dispatch(updateRecipeDate({id: recipe.id, newDate}));
        // changer la consoDate de tous les ingrédients qui sont dans la recipe
        for(const ingredient of recipe.ingredients) {
            dispatch(updateIngredientDate({ingredientName: ingredient, newDate}));
        }
        onClose();
    }

    return (
        <div>
            <h2>Modifier la date pour la recette "{event.title}"</h2>
            <div className="m-4">
                <DatePicker selected={event.date} onChange={handleChange} />
            </div>
        </div>
    )
}
