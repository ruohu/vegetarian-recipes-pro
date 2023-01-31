import React, { useEffect, useState } from 'react';
import './Search.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NO_KEYWORD } from '../../utils/Constants';

import SearchForm from '../../components/search-form/SearchForm';
import RecipesPagination from '../../components/RecipesPagination/RecipesPagination';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';
import { useGetSearchRecipesQuery } from '../../services/recipesApi';

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const optionsQuery = useSelector((state) => state.checkedReducer.optionsQuery);
  let params = useParams();

  const { data, isLoading, error } = useGetSearchRecipesQuery({ number: 100, subQuery: optionsQuery });

  useEffect(() => {
    if (data) {
      setRecipes(data.results);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingComponent />
  }

  if (error) {
    return <ErrorComponent />
  }

  return (
    <div className="page-container">
      <SearchForm />
      <div className="search-results-container">
        <h3 className="searched-result-label">
          {params.search !== NO_KEYWORD
            ? recipes.length + " results for \"" + params.search + "\""
            : "Total results: " + recipes.length
          }
        </h3>
        <RecipesPagination recipes={recipes} />
      </div>
    </div>
  );
};

export default Search;