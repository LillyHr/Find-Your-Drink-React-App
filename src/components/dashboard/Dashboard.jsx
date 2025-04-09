import './Dashboard.css';

const coctails = [
    {
        id: 1,
        name: 'Margarita',
        image: 'image',
        ingredients: 'ingr',
    },
    {
        id: 2,
        name: 'Margarita',
        image: 'image',
        ingredients: 'ingr',
    },
    {
        id: 3,
        name: 'Margarita',
        image: 'image',
        ingredients: 'ingr',
    }
];

export default function Dashboard() {
    const cocktailList = coctails.map((cocktail) =>
        <div key={cocktail.id} className="card">
            <img src={cocktail.image} alt={cocktail.name} />
            <div className="card-content">
                <h2>{cocktail.name}</h2>
                <p>Ingredients: {cocktail.ingredients}</p>
            </div>
        </div>)

    return <>

        <h2>Cocktail Dashboard</h2>
        <div className="card-container">
            {cocktailList}
        </div>
    </>
}

