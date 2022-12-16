import './ShowRecipeDetails.scss'

const ShowRecipeDetails = (props) => {

    console.log(props);
    const recipeData = props.recipe;
    console.log('recipeData = ' + recipeData);

    const getIngredient = () => {
        const ingredients = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipeData[`strIngredient${i}`];
            const measure = recipeData[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push({ ingredient: ingredient, measure: measure });
            }
        }
        return ingredients
    }

    return (
        <div className="recipe-details">
            {recipeData && (
                <>
                    <div className="title-cat">
                        <h1>{recipeData.strMeal}</h1>
                        <h3>{recipeData.strCategory}</h3>
                    </div>
                    <img src={recipeData.strMealThumb}></img>
                    <div className="infos">
                        <p>{recipeData.strInstructions}</p>
                        <div className="ingredient">
                            {getIngredient().map((ingredient) => {
                                return (
                                    <p>{ingredient.ingredient} - {ingredient.measure}</p>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}

export default ShowRecipeDetails;