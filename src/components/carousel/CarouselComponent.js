import React from 'react';
import './CarouselComponent.scss';

import defaultImage from "../../assets/images/no-image.jpg";

import CardComponent from '../card/CardComponent';

const CarouselComponent = ({ recipes, carouselTitle }) => {

  return (
    <div className="carousel-container">
      <h3>{carouselTitle}</h3>
      <div className="carousel-cards">
        {recipes?.map((recipe) => {
          return <CardComponent
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image ? recipe.image : defaultImage}
          />
        })}
      </div>
    </div>
  );
}

export default CarouselComponent;