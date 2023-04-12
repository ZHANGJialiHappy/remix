import { NavLink } from "@remix-run/react"

function MainNavigation() {
    return (
        <nav className="navbar bg-base-100 justify-center">
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? " btn btn-ghost normal-case text-xl text-yellow-200" : isActive ? "btn btn-ghost normal-case text-xl text-yellow-400" : "btn btn-ghost normal-case text-xl"}>
                Home
            </NavLink>
            <NavLink to="/notes"
                className={({ isActive, isPending }) =>
                    isPending ? " btn btn-ghost normal-case text-xl text-yellow-200" : isActive ? "btn btn-ghost normal-case text-xl text-yellow-400" : "btn btn-ghost normal-case text-xl"}>
                Notes
            </NavLink>
        </nav>
    )
}

export default MainNavigation