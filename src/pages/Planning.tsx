import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useSelector } from 'react-redux';
import { EventType } from '../types/appTypes';
import { EventCard } from '../components/Cards/EventCard';

export const Planning = () => {
    const events = useSelector((state: any) => state.events.value);
    
    const planningEvents = events.map((e: EventType) => ({
        id: e.id,
        title: e.recipe.strMeal,
        date: e.consoDate.split('/')[2] + '-' + e.consoDate.split('/')[1] + '-' + e.consoDate.split('/')[0],
    }));

    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            weekends={true}
            events={planningEvents}
            eventContent={(arg: any) => (
                <EventCard arg={arg} />
            )}
        />
    )
}
