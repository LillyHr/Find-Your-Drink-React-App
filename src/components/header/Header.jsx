import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a routerlink="/">Home</a>
                        </li>
                        <li >
                            <a routerlink="/view/cocktails">Dashboard</a>
                        </li>
                        <li>
                            <a routerlink="/auth/login">Login</a>
                        </li>
                        <li >
                            <a>Logout</a>
                        </li>
                        <li>
                            <a routerlink="/auth/register">Register</a>
                        </li>
                        <li >
                            <a routerlink="/view/create-cocktail">Create a drink</a>
                        </li>
                        <li >
                            <a routerlink="/auth/profile">Profile</a>
                        </li>
                        <li >
                            <a routerlink="/search">Search</a>
                        </li>

                    </ul>
                </nav>
            </header>
        </>
    )

};