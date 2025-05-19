import { Link, NavLink } from "react-router"
import "./navigation.css"

export default function Home(){
    return(
        <>
        <nav className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">My Scooter</NavLink>
            <NavLink to="/settings">Settings</NavLink>
        </nav>
        <h1>Home</h1>
        {/* <Link to="/about">go to about!</Link> */}
        </>
    )
}

