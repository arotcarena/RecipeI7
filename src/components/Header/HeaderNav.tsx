import { Link, useLocation } from "react-router-dom"
import { appRoutes } from "../../config/appRoutes"
import { AppRoute } from "../../types/appTypes"

export const HeaderNav = () => {
    const {pathname} = useLocation();

    return (
        <nav className="py-4 px-5">
            <ul className="flex flex-row justify-between sm:justify-end gap-x-4 items-center text-blue-800">
                {
                    appRoutes.map((route: AppRoute, index: number) => (
                        <li key={index}>
                            <Link className={pathname === route.path ? 'font-semibold': ''} to={route.path}>{route.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
