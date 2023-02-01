import React, { useEffect, useState } from 'react';
import './CarouselComponent.scss';

import defaultImage from "../../assets/images/no-image.jpg";

import CardComponent from '../card/CardComponent';
import LoadingComponent from '../loading/LoadingComponent';

const CarouselComponent = ({ useGetRecipes, carouselTitle }) => {

  const { data, isFetching, error } = useGetRecipes;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (data) {
      if (data.recipes) {
        setRecipes(data.recipes);
      } else {
        setRecipes(data.results);
      }
    }
  }, [data]);

  if (isFetching) {
    return <LoadingComponent />
  }

  return (
    <div className="carousel-container">
      <h3>{carouselTitle}</h3>
      {isFetching
        ? <LoadingComponent />
        : error
          ? <div>
            ❌ Loading failed ❌
          </div>
          : <div className="carousel-cards">
            {recipes?.map((recipe) => {
              return <CardComponent
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image ? recipe.image : defaultImage}
              />
            })}
          </div>

      }
    </div>
  );
}

export default CarouselComponent;