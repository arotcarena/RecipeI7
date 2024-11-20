import { useFormik } from "formik";
import { Ingredient } from "../../types/appTypes"
import { useDispatch } from "react-redux";
import { updateIngredient } from "../../features/ingredientSlice";
import DatePicker from "react-datepicker";

export const IngredientUpdateForm = ({ingredient, onClose}: {ingredient: Ingredient, onClose: () => void,}) => {
    const dispatch = useDispatch();
    const validation = useFormik({
        initialValues: {
          quantity: ingredient.quantity,
          consoDate: new Date(ingredient.consoDate),
        },
        onSubmit: (formData: any) => {
            dispatch(updateIngredient({
                ingredientName: ingredient.name,
                data: {
                    ...ingredient,
                    quantity: formData.quantity,
                    consoDate: (new Date(formData.consoDate)).toLocaleDateString(),
                }
            }));
            onClose();
        },
    });

    const handleChangeDate = (newDate: any) => validation.setFieldValue('consoDate', (new Date(newDate)));

    return (
        <form onSubmit={validation.handleSubmit}>
            <h2>Modifier l'ingrédient "{ingredient.name}"</h2>
            <div className="my-5">
                <label className="block mb-2" htmlFor="quantity">Quantité</label>
                <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    onChange={validation.handleChange}
                    value={validation.values.quantity}
                    className="block h-[40px] w-full px-2 border border-gray-600"
                />
            </div>
            <div className="my-5">
                <DatePicker selected={validation.values.consoDate} onChange={handleChangeDate} />
            </div>

            <button className="m-4 bg-gray-100 px-4 py-2" type="submit">Valider</button>
        </form>
    )
}
