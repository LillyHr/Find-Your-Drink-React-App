import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li >
                            <Link>Logout</Link>
                        </li>
                        <li>
                            <Link to="/">Register</Link>
                        </li>
                        <li >
                            <Link to="/">Create a drink</Link>
                        </li>
                        <li >
                            <Link to="/">Profile</Link>
                        </li>
                        <li >
                            <Link to="/search">Search</Link>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )

};