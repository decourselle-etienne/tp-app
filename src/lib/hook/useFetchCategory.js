import { useEffect, useState } from "react";

export const useFetchCategory = () => {

    const [recipeCategoryData, seCategoryData] = useState([]);

    const [cocktailResultData, handleSubmit] = useFetchSearch;



    useEffect(() => {
        (async () => {
            console.log("test useEffect")
            const recipeCategoryResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const recipeCategoryData = await recipeCategoryResponse.json();

            seCategoryData(recipeCategoryData.categories);

        })();
    }, []);


    return recipeCategoryData
}
