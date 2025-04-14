import './Search.css';

export default function Search() {
    return (
        <>
            <div className="container">
                <h2>Search for your cocktail</h2>
                <input type="text" placeholder="Search by name..." />
                <button type="submit">Search</button>
            </div>
        </>
    )
}