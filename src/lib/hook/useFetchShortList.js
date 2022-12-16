import { useEffect, useState } from "react";

export const useFetchShortList = () => {
    const [allrecipesData, setAllRecipesData] = useState([]);

    useEffect(() => {
        (async () => {
            const allrecipesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const allrecipesData = await allrecipesResponse.json();
            setAllRecipesData([allrecipesData.meals[0], allrecipesData.meals[1], allrecipesData.meals[2]]);
        })();
    });

    return allrecipesData
}