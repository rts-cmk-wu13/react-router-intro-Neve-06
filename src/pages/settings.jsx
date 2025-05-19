import { Link, NavLink } from "react-router"
import "./navigation.css"

export default function Settings(){
    return(
        <>
        <nav className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">My Scooter</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
        <h1>Settings</h1>
        {/* <Link to="/about">go to about!</Link> */}
        </>
    )
}

