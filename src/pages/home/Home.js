import React from 'react';
import './Home.scss';
import CarouselComponent from '../../components/carousel/CarouselComponent';
import { Await, useLoaderData } from 'react-router-dom';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';

const Home = () => {
  const recipes = useLoaderData();

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
        <React.Suspense fallback={<LoadingComponent />}>
          <Await
            resolve={recipes.loadedRecipes}
            errorElement={<ErrorComponent />}
          >
            {
              (loadedRecipes) => (
                <>
                  <CarouselComponent
                    recipes={loadedRecipes?.randomRecipes}
                    carouselTitle="Popular Recipes"
                  />
                  <CarouselComponent
                    recipes={loadedRecipes?.glutenFreeRecipes}
                    carouselTitle="Gluten free Recipes"
                  />
                  <CarouselComponent
                    recipes={loadedRecipes?.dairyFreeRecipes}
                    carouselTitle="Dairy free Recipes"
                  />
                </>
              )
            }

          </Await>
        </React.Suspense>
      </section>
    </>
  )
};

export default Home;
