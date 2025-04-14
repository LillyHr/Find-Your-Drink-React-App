import  './CreateADrink.css';

export default function CreateADrink() {
    return <>
    <div className="container">
    <h2>Create a Cocktail</h2>
    <form >
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" 
            />
        </div>
        <div className="form-group">
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients" rows="4" 
            ></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="instructions">Instructions:</label>
            <textarea id="instructions" name="instructions" rows="4" 
            ></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="imageURL">imageURL:</label>
            <input type="text" id="imageURL" name="imageURL" 
            />
        </div>
        <button type="button">Create A Drink</button>
    </form>
</div>
    </>
}