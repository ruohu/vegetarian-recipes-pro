import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import SingleVegetarianRecipe from './pages/single-vegetarian-recipe/SingleVegetarianRecipe';
import NotFound from './pages/not-found/NotFound';
import Navbar from './components/navbar/Navbar';
import Search from './pages/search/Search';
import SearchForm from './components/search-form/SearchForm';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<SearchForm />} />
            <Route exact path="/search/:search" element={<Search />} />
            <Route exact path="/recipe/:id" element={<SingleVegetarianRecipe />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
