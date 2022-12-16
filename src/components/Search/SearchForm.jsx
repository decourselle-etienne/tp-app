import { Link } from "react-router-dom";

const SearchForm = (props) => {

    const handleSubmit = props.handleSubmit;

    return (
        <form onSubmit={handleSubmit}>
            <input name="search" type="text" class="input" placeholder="search..." />
            <Link to={`/list/${recipeData.idMeal}`}>
                <button type="submit" >Search</button>
            </Link>
        </form >
    )
}

export default SearchForm