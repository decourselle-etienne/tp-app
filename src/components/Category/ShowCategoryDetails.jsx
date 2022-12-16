
const ShowCategoryDetails = (props) => {

    console.log(props);
    const categoryData = props.recipe;

    return (
        <div className="category-details">
            {categoryData && (
                <>
                    <h1 className="title-cat">{categoryData.strCategory}</h1>
                    <img src={categoryData.strCategoryThumb}></img>
                    <p className="infos">{categoryData.strCategoryDescription}</p>
                </>
            )}

        </div>
    );
}

export default ShowCategoryDetails;