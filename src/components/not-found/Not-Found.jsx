import './NotFound.css';

export default function NotFound() {
    return (
        <>
            <div class="container">
                <h1>404</h1>
                <p>Oops! The page you're looking for could not be found.</p>
                <a routerLink="/">Back to Home</a>
            </div>
        </>
    )
}