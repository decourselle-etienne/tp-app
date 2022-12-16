import { useFetchAll } from "../../lib/hook/useFetchAll";
import ShowRecipe from "./ShowRecipe";
import './ListRecipe.scss';

const ListRecipe = () => {

    const allrecipesData = useFetchAll();

    return (
        <div className="list">
            {allrecipesData.map((recipe) => {
                return (
                    <ShowRecipe recipe={recipe} />
                )
            })}
        </div>
    );
}

export default ListRecipe;