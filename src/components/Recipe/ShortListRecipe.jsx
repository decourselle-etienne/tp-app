import ShowRecipe from "./ShowRecipe";
import './ShortListRecipe.scss';
import { useFetchShortList } from "../../lib/hook/useFetchShortList";
import { useNavigate } from "react-router-dom";

const ShortListRecipe = () => {

    const navigate = useNavigate();

    const showMore = () => {
        navigate('/list')
    }

    const shortListRecipesData = useFetchShortList();

    return (
        <div className="list-global">
            <div className="list">
                {shortListRecipesData.map((recipe) => {
                    return (
                        <ShowRecipe recipe={recipe} />
                    )
                })}

            </div>
            <button className="list-button" onClick={showMore}>Show More</button>
        </div>
    );
}

export default ShortListRecipe;