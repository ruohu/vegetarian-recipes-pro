import React, { useState } from 'react';
import './SearchForm.scss';
import { useNavigate } from 'react-router-dom';
import { NO_KEYWORD } from '../../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setApiQuery } from '../../redux/actions';

import FilterComponent from '../filter/FilterComponent';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkedList = useSelector((state) => state.checkedReducer.checkedList);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let apiQuery = `&query=${searchValue}&cuisine=${checkedList.cuisines}&intolerances=${checkedList.excludes}`;
    dispatch(setApiQuery(apiQuery));
    if (searchValue !== "") {
      navigate("/search/" + searchValue);
    } else {
      navigate("/search/" + NO_KEYWORD);
    }
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={handleChange}
          value={searchValue} />
        <FilterComponent />
      </form>
    </div>
  );

}

export default SearchForm;