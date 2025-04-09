import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <>
            <div className="container">
                <h1>404</h1>
                <p>Oops! The page you're looking for could not be found.</p>
                <Link to="/">Back to Home</Link>
            </div>
        </>
    )
}