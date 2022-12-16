import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowRecipeDetails from "./ShowRecipeDetails";
import './RecipeDetails.scss'


const RecipeDetails = () => {

    const { id } = useParams();

    const [recipeDetail, setRecipeDetail] = useState(null);

    useEffect(() => {
        (async () => {
            const recipeCategoryResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const recipeCategoryData = await recipeCategoryResponse.json();
            setRecipeDetail(recipeCategoryData.meals[0]);
        })();
    }, [id]);

    return (
        <div className="details">
            <ShowRecipeDetails recipe={recipeDetail} />
        </div>
    );
}

export default RecipeDetails;