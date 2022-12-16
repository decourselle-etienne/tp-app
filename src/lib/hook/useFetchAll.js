import { useEffect, useState } from "react";

export const useFetchAll = () => {
    const [allrecipesData, setAllRecipesData] = useState([]);

    useEffect(() => {
        (async () => {
            const allrecipesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const allrecipesData = await allrecipesResponse.json();
            setAllRecipesData(allrecipesData.meals);
        })();
    });

    return allrecipesData
}