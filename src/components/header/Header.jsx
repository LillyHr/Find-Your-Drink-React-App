import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li >
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={"/login"}>Login</Link>
                        </li>
                        <li >
                            <Link to={"/"}>Logout</Link>
                        </li>
                        <li>
                            <Link to={"/register"}>Register</Link>
                        </li>
                        <li >
                            <Link to={"/create-a-drink"}>Create a drink</Link>
                        </li>
                        <li >
                            <Link to={"/profile"}>Profile</Link>
                        </li>
                        <li >
                            <Link to={"/search"}>Search</Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )

};