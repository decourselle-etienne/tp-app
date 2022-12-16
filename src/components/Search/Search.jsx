import { useFetchSearch } from "../../lib/hook/useFetchSearch";
import SearchForm from "./SearchForm";



const Search = () => {

    // Créer un composant contenant un formulaire avec un input de type texte

    // Au submit du formulaire, faites un appel vers un appel vers www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita en remplaçant "margarita" par la valeur de la recherche

    // Dans votre composant affichez les cocktails trouvés sur l'api


    const handleSubmit = async (e) => {
        e.preventDefault()
        const research = e.target.search.value;
        const recipeReseachResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${research}`);
        const RecipeResultData = await recipeReseachResponse.json();
        setRecipeResultData(RecipeResultData.meals);
    };


    return (

        <div>
            <SearchForm handleSubmit={handleSubmit} />
        </div >

    );
}

export default Search;