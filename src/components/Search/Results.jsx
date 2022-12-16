import { useFetchSearch } from "../../lib/hook/useFetchSearch";
import ShowRecipe from "../Recipe/ShowRecipe";

const Results = (props) => {
    const recipesResultData = props.cocktailResultData;
    console.log(recipesResultData)

    const [cocktailResultData] = useFetchSearch();

    return (
        <div className="recipes">
            {recipesResultData.map((item) => {
                console.log(item)
                return (
                    <div >
                        <ShowRecipe recipe={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default Results
