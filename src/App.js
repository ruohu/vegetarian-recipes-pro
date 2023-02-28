import React from 'react';
import './App.scss';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  defer
} from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import SingleVegetarianRecipe from './pages/single-vegetarian-recipe/SingleVegetarianRecipe';
import NotFound from './pages/not-found/NotFound';
import Search from './pages/search/Search';
import SearchForm from './components/search-form/SearchForm';
import ErrorComponent from './components/error/ErrorComponent';
import RootComponent from './components/rootComponent/RootComponent';
import { homeLoader, searchLoader, singleVegetarianRecipeLoader } from './utils/recipeLoaders';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<RootComponent />}>
        <Route index element={<Home />}
          loader={() => { return defer({ loadedRecipes: homeLoader() }) }} />
        <Route exact path="/search"
          element={<SearchForm />}
        />
        <Route exact path="/search/:search"
          element={<Search />}
          loader={searchLoader}
        />
        <Route exact path="/recipe/:id"
          element={<SingleVegetarianRecipe />}
          loader={(params) => { return singleVegetarianRecipeLoader(params.params) }}

        />
        <Route exact path="/error"
          element={<ErrorComponent />}
        />
        <Route exact path="*"
          element={<NotFound />}
        />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
