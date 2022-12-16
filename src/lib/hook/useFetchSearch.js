import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchSearch = () => {

    const [RecipeResultData, setRecipeResultData] = useState([]);

    const { research } = useParams()

    useEffect(() => {
        (async () => {
            const recipeReseachResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${research}`);
            const RecipeResultData = await recipeReseachResponse.json();
            setRecipeResultData(RecipeResultData.meals);
        })();
    }, []);


    return RecipeResultData

}