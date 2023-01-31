import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_API_KEY;

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spoonacular.com/recipes" }),
  endpoints: (builder) => ({
    getRandomRecipes: builder.query({
      query: (params) =>
        `/random?apiKey=${API_KEY}&tags=vegetarian&number=${params.number}`,
    }),
    getSearchRecipes: builder.query({
      query: (params) =>
        `/complexSearch?apiKey=${API_KEY}&tags=vegetarian&number=${params.number}${params.subQuery}`,
    }),
    getRecipeDetails: builder.query({
      query: (params) =>
        `/${params.id}/information?apiKey=${API_KEY}`,
    }),
  }),
});

export const {
  useGetRandomRecipesQuery,
  useGetSearchRecipesQuery,
  useGetRecipeDetailsQuery,
} = recipesApi;