import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleVegetarianRecipe.scss';

import api from '../../api';
import { useFetch } from '../../hooks/useFetch';
import defaultImage from "../../assets/images/no-image.jpg";
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';

const SingleVegetarianRecipe = () => {
  const [details, setDetails] = useState({})
  let params = useParams();

  const { data, isLoading, error } = useFetch(`${api.URL}/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

  useEffect(() => {
    if (data) {
      setDetails(data);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="single-recipe-container page-container">
      <h2>{details.title}</h2>

      <div className="recipe-section recipe-details-1">
        <img src={details.image ? details.image : defaultImage} alt={details.title} />
        <div className="short-details-container">
          <div>
            <span className="detail-label">Preparation time: </span>
            <span>{details.readyInMinutes} mins</span>
          </div>
          <div>
            <span className="detail-label">Serving: </span>
            <span>{details.servings}</span>
          </div>
          <div>
            <span>{details.glutenFree ? "Gluten Free" : ""}</span>
          </div>
          <div>
            <span>{details.dairyFree ? "Dairy Free" : ""}</span>
          </div>
        </div>
      </div>

      <div className="recipe-section">
        <h3>Ingredients</h3>
        <ul>
          {details.extendedIngredients?.map(
            (ingredient, index) => <li key={ingredient.id + index}>{ingredient.original}</li>)
          }
        </ul>
      </div>

      <div className="recipe-section">
        <h3>Instructions</h3>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
      </div>
    </div>
  );
}

export default SingleVegetarianRecipe;