import './styles/App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ListRecipe from './components/Recipe/ListRecipe';
import RecipeDetails from './components/Recipe/RecipeDetails';
import CategoryList from './components/Category/CategoryList';
import Results from './components/Search/Results';

function App() {




  return (
    <div id='content-body'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/list' element={<ListRecipe />} />
          <Route path='/list/:id' element={<RecipeDetails />} />
          <Route path='/categories' element={<CategoryList />} />
          <Route path='/categories/:id' element={<CategoryList />} />
          <Route path="/search/:research" element={<Results />} />

          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;



// Dans le header, faites un input de recherche
// quand on submit le form, on est redirigé vers une page qui affiche les résultats de recherche

// créer une page qui affiche toutes les catégories
// créer une page qui affiche le détail d'une catégorie

// au click sur une catégorie dans la liste, on est redirigé vers la page qui affiche le détail de la catégorie
