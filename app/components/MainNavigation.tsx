import { NavLink } from "@remix-run/react"

function MainNavigation() {
    return (
        <nav className="navbar bg-base-100 justify-center">
            <NavLink to="/" className="btn btn-ghost normal-case text-xl focus:text-yellow-400">Home</NavLink>
            <NavLink to="/notes" className="btn btn-ghost normal-case text-xl focus:text-yellow-400">Notes</NavLink>
        </nav>
    )
}

export default MainNavigation