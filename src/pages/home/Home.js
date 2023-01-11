import React from 'react';
import './Home.scss';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import api from '../../api';

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
          recipesUrl={`${api.URL}${api.GET_RANDOM}&tags=vegetarian&number=12`}
          carouselTitle="Popular Recipes"
        />
        <CarouselComponent
          recipesUrl={`${api.URL}${api.GET_SEARCH}&diet=gluten free,vegetarian&number=12`}
          carouselTitle="Gluten free Recipes"
        />
        <CarouselComponent
          recipesUrl={`${api.URL}${api.GET_SEARCH}&intolerances=dairy&diet=vegetarian&number=12`}
          carouselTitle="Dairy free Recipes"
        />
      </section>
    </>
  )
};

export default Home;
