import { useDispatch } from "react-redux";
import { deleteEvent } from "../../features/eventSlice";
import { useToggle } from "../../functions/customHooks/useToggle";
import { Modal } from "../Modal";
import { EventUpdateForm } from "../Form/EventUpdateForm";
import { deleteRecipe } from "../../features/recipeSlice";

export const EventCard = ({arg}: {arg: any}) => {
    const id = arg.event['_def'].id;
    const title = arg.event['_def'].title;
    const date = arg.event.start;

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteEvent(title));
        dispatch(deleteRecipe(title));
    }

    const [updateModalIsOpen, toggleUpdateModal] = useToggle(false);
    
    return (
        <>
            <div className="flex flex-row justify-between items-center px-4 py-2">
                {title}
                <div className="flex flex-col gap-y-2">
                    <button onClick={toggleUpdateModal}>modifier</button>
                    <button onClick={handleDelete}>Supprimer</button>
                </div>
            </div>
            {
                updateModalIsOpen && (
                    <Modal isOpen={updateModalIsOpen} onClose={toggleUpdateModal}>
                        <EventUpdateForm event={{id, title, date}} onClose={toggleUpdateModal} />
                    </Modal>
                )
            }
        </>
    );
}