import React from 'react';
import './Home.scss';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { useGetRandomRecipesQuery, useGetSearchRecipesQuery } from '../../services/recipesApi';

const Home = () => {

  return (
    <>
      <section className="home-container slide-up">
        <h1>Vegetarian Recipes</h1>
        <h2>Are you looking for new recipes?</h2>
        <a href="#categories">
          <button>Let's start!</button>
        </a>
      </section>
      <section id="categories">
        <CarouselComponent
          useGetRecipes={useGetRandomRecipesQuery({ number: 12 })}
          carouselTitle="Popular Recipes"
        />
        <CarouselComponent
          useGetRecipes={useGetSearchRecipesQuery({ number: 12, subQuery: "&diet=gluten free" })}
          carouselTitle="Gluten free Recipes"
        />
        <CarouselComponent
          useGetRecipes={useGetSearchRecipesQuery({ number: 12, subQuery: "&intolerances=dairy&diet=vegetarian&offset=12" })}
          carouselTitle="Dairy free Recipes"
        />
      </section>
    </>
  )
};

export default Home;
