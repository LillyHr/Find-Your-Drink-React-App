import { Link } from 'react-router-dom';
import './LogIn.css';

export default function LogIn() {
    return (
        <>
        <div className="container">
    <h1>Log in</h1>
    <form id="login-form" >
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" 
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" 
            required
            />
        </div>
        <button type="submit">Log in</button>
        <p>Don't have an account? 
            <Link to={"/register"}>Register</Link>
        </p>
    </form>
</div>
        </>
    )
}