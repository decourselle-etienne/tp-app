import { Link } from "react-router-dom";
import './ShowCategory.scss'

const ShowCategory = (props) => {

    console.log(props)
    const categoryData = props.category;
    return (
        <div className="category">
            {categoryData && (
                <>
                    <Link to={`/category/${categoryData.idCategory}`}>
                        <button className="category-button">{categoryData.strCategory}</button>
                    </Link>
                </>
            )}

        </div>
    )
}

export default ShowCategory;