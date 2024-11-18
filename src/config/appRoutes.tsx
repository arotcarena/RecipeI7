import { Courses } from "../pages/Courses";
import { Homepage } from "../pages/Homepage";
import { Planning } from "../pages/Planning";

export const appRoutes = [
    {
        path: '/',
        element: <Homepage />,
        label: 'Accueil'
    },
    {
        path: '/courses',
        element: <Courses />,
        label: 'Courses'
    },
    {
        path: '/planning',
        element: <Planning />,
        label: 'Planning'
    }
];
