import React from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import './SingleVegetarianRecipe.scss';

import defaultImage from "../../assets/images/no-image.jpg";
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';

const SingleVegetarianRecipe = () => {
  const details = useLoaderData();

  return (

    <React.Suspense fallback={<LoadingComponent />}>
      <Await
        resolve={details.loadedData}
        errorElement={
          <ErrorComponent />
        }
      >{(details) => (
        <div className="single-recipe-container page-container">
          <h2 className="recipe-title">{details?.title}</h2>
          <img
            className="recipe-image"
            src={details?.image ? details?.image : defaultImage} alt={details?.title}
          />
          <div className="short-details-container">
            <div>
              <span className="detail-label">Preparation time: </span>
              <span>{details?.readyInMinutes} mins</span>
            </div>
            <div>
              <span className="detail-label">Serving: </span>
              <span>{details?.servings}</span>
            </div>
            <div>
              <span>{details?.glutenFree ? "Gluten Free" : ""}</span>
            </div>
            <div>
              <span>{details?.dairyFree ? "Dairy Free" : ""}</span>
            </div>
          </div>

          <div className="recipe-section recipe-ingredients">
            <h3>Ingredients</h3>
            <ul>
              {details?.extendedIngredients?.map(
                (ingredient, index) => <li key={ingredient.id + index}>{ingredient.original}</li>)
              }
            </ul>
          </div>
          <div className="recipe-section recipe-instructions">
            <h3>Instructions</h3>
            <p dangerouslySetInnerHTML={{ __html: details?.instructions }}></p>
          </div>
        </div >
      )

        }

      </Await>
    </React.Suspense>

  );
}

export default SingleVegetarianRecipe;
