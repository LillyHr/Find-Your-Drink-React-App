import './Home.css';
export default function Home() {
    return (
        <>
            <div className="container">
                <h1>Welcome to our Cocktail World!</h1>
                <p>We're excited to share with you our collection of delicious cocktails. Whether you're a cocktail enthusiast or just looking for a refreshing drink, you've come to the right place.</p>
                <a routerlink="/view/cocktails" className="btn">Explore Cocktails</a>
            </div>
        </>
    )
}