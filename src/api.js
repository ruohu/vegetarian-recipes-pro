const api = {
  URL: "https://api.spoonacular.com/recipes",
  GET_RANDOM: `/random?apiKey=${process.env.REACT_APP_API_KEY}`,
  GET_SEARCH: `/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`,
}

export default api;