import React from 'react';
import './Search.scss';
import { Await, useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { NO_KEYWORD } from '../../utils/Constants';

import SearchForm from '../../components/search-form/SearchForm';
import RecipesPagination from '../../components/RecipesPagination/RecipesPagination';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';

const Search = () => {
  let params = useParams();
  const recipes = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="page-container">
      <SearchForm />
      {navigation.state === "loading"
        ? <LoadingComponent />
        : <React.Suspense fallback={<LoadingComponent />}>
          <Await
            resolve={recipes.loadedData}
            errorElement={
              <ErrorComponent />
            }
          >
            {(loadedData) => {
              let recipes = loadedData?.results;
              return (
                <div className="search-results-container">
                  <h3 className="searched-result-label">
                    {params.search !== NO_KEYWORD
                      ? recipes?.length + " results for \"" + params.search + "\""
                      : "Total results: " + recipes?.length
                    }
                  </h3>
                  <RecipesPagination />
                </div>
              );
            }
            }
          </Await>
        </React.Suspense>
      }
    </div>
  );
};

export default Search;