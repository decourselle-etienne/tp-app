import { useEffect, useState } from "react";

export const useFetchRandom = () => {

    const [recipeRandomData, setRandomData] = useState(null);


    useEffect(() => {
        (async () => {
            const recipeResponse = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const recipeRandomData = await recipeResponse.json();
            setRandomData(recipeRandomData.meals[0]);
        })();
    }, []);

    return recipeRandomData
}

