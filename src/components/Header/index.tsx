import { Link } from "react-router-dom"
import { HeaderNav } from "./HeaderNav"
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"

export const Header = () => {
    return (
        <div className="bg-gray-100">
            <HeaderNav />
            <div className="flex flex-row justify-center my-4">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="mx-auto sm:pb-5" style={{maxWidth: '450px'}}>
                <SearchBar />
            </div>
        </div>
    )
}
