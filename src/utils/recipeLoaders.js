
import { defer } from 'react-router-dom';
import { store } from '../redux/store/store';
import { recipesApi } from '../services/recipesApi';

const loaderHelper = async (request) => {
  try {
    const response = await request.unwrap();
    return response;
  } catch (err) {
    console.error("error", err);
    throw err;
  } finally {
    request.unsubscribe();
  }
}

export const singleVegetarianRecipeLoader = (params) => {
  const request = store.dispatch(recipesApi.endpoints.getRecipeDetails.initiate(params));
  return defer({ loadedData: loaderHelper(request) });
}

export const homeLoader = async () => {
  const randomRecipesRequest = store.dispatch(recipesApi.endpoints.getRandomRecipes.initiate(
    { number: 12 }
  ));

  const glutenFreeRecipesRequest = store.dispatch(recipesApi.endpoints.getSearchRecipes.initiate(
    { number: 12, subQuery: "&diet=gluten free" }
  ));

  const dairyFreeRecipesRequest = store.dispatch(recipesApi.endpoints.getSearchRecipes.initiate(
    { number: 12, subQuery: "&intolerances=dairy&diet=vegetarian&offset=12" }
  ));

  try {
    const randomRecipes = await randomRecipesRequest.unwrap();
    const glutenFreeRecipes = await glutenFreeRecipesRequest.unwrap();
    const dairyFreeRecipes = await dairyFreeRecipesRequest.unwrap();

    return ({
      randomRecipes: randomRecipes?.recipes,
      glutenFreeRecipes: glutenFreeRecipes?.results,
      dairyFreeRecipes: dairyFreeRecipes?.results
    });
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    randomRecipesRequest.unsubscribe();
    glutenFreeRecipesRequest.unsubscribe();
    dairyFreeRecipesRequest.unsubscribe();
  }
}


export const searchLoader = () => {
  let state = store.getState();
  let apiQueryParam = { number: 100, subQuery: state?.checkedReducer?.optionsQuery }
  const request = store.dispatch(recipesApi.endpoints.getSearchRecipes.initiate(apiQueryParam));
  return defer({ loadedData: loaderHelper(request) });
}