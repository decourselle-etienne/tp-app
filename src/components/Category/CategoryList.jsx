import { useFetchCategory } from "../../lib/hook/useFetchCategory";
import ShowCategory from "./ShowCategory";
import './CategoryList.scss'


const CategoryList = () => {

    const allCategories = useFetchCategory()

    return (
        <div className="categories">
            {allCategories.map((category) => {
                return (
                    <ShowCategory category={category} />
                )
            })}
        </div>
    );
}

export default CategoryList;