import { Link } from 'react-router-dom';
import './ShowRecipe.scss'

const ShowRecipe = (props) => {
    const recipeData = props.recipe;


    return (
        <div className="recipe">
            <div className="title-cat">
                <h1>{recipeData.strMeal}</h1>
                <h3>{recipeData.strCategory}</h3>
            </div>
            <img src={recipeData.strMealThumb}></img>
            <Link to={`/list/${recipeData.idMeal}`}>
                <button className="show-more">Show More</button>
            </Link>

        </div>
    );
}

export default ShowRecipe;