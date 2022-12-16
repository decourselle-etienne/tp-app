import { useFetchRandom } from "../../lib/hook/useFetchRandom";
import ShowRecipe from "../Recipe/ShowRecipe";

const RandomRecipe = () => {

    const mealRandomData = useFetchRandom();


    return (

        <div>
            <div className="content">
                {mealRandomData ? (
                    <ShowRecipe recipe={mealRandomData} />
                ) : (
                    <div>
                        <h1>Recette en cours de chargement</h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RandomRecipe;