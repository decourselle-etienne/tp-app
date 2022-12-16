import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowRecipeDetails from "./ShowRecipeDetails";
import './RecipeDetails.scss'


const CategoryDetails = () => {

    const { id } = useParams();

    const [categoryDetails, setCatDetail] = useState(null);

    useEffect(() => {
        (async () => {
            const recipeCategoryResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const recipeCategoryData = await recipeCategoryResponse.json();
            setCatDetail(recipeCategoryData.categories[0]);
        })();
    }, [id]);

    return (
        <div className="details">
            <ShowRecipeDetails recipe={categoryDetails} />
        </div>
    );
}

export default CategoryDetails;