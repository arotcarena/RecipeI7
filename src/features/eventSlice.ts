import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventType, Recipe } from "../types/appTypes";

type EventState = {
    value: EventType[]
};

const initialState: EventState = {
    value: []
};

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state: EventState, action: PayloadAction<{recipe: Recipe, consoDate: string}>) => {
            state.value.push({
                recipe: action.payload.recipe,
                consoDate: action.payload.consoDate,
                id: Date.now().toString() + (Math.random() * 100)
            });
        },
        deleteEvent: (state: EventState, action: PayloadAction<string>) => {
            state.value = state.value.filter((event: EventType) => event.recipe.strMeal !== action.payload);
        },
        updateEventDate: (state: EventState, action: PayloadAction<{recipe: string, newDate: string}>) => {
            state.value = state.value.map((event: EventType) => {
                if(event.recipe.strMeal === action.payload.recipe) {
                    return {...event, consoDate: action.payload.newDate};
                }
                return event;
            })
        }
    },
});

export const {addEvent, deleteEvent, updateEventDate} = eventSlice.actions;

export default eventSlice.reducer;
