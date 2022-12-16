import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchId = () => {

    const [recipeCategoryData, seCategoryData] = useState(null);

    const { id } = useParams();
    console.log("test=" + id)

    useEffect(() => {
        (async () => {
            console.log("id = " + id);
            const recipeCategoryResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            console.log(recipeCategoryResponse);
            const recipeCategoryData = await recipeCategoryResponse.json();
            seCategoryData(recipeCategoryData.meals[0]);
        })();
    }, [id]);

    return recipeCategoryData
}
