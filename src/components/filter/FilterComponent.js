import React, { useEffect, useState } from 'react';
import './FilterComponent.scss';
import { cuisines } from '../../data/cuisines';
import { excludes } from '../../data/excludes';
import { useDispatch, useSelector } from 'react-redux';
import { resetChecked } from '../../redux/reducers/checkedOptionsSlice';

import SubFilterComponent from '../SubFilterComponent/SubFilterComponent';

const FilterComponent = ({ handleSubmit }) => {

  const [open, setOpen] = useState(false);
  const checkedList = useSelector((state) => state.checkedReducer.checkedList);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetChecked());
  };

  const handleSearchClick = (e) => {
    setOpen(false);
    handleSubmit(e);
  }

  return (
    <div className="filter-container">
      <div>
        Advanced Search
        <button type="button" className="open-btn" onClick={() => { setOpen(!open) }}>
          {open ? "-" : "+"}
        </button>
        {checkedList.cuisines.length > 0 || checkedList.excludes.length > 0 ? "😀" : "😴"}
      </div>
      {open &&
        <div className="filter-box">
          <SubFilterComponent dataList={cuisines} title="Cuisines" category="cuisines" />
          <SubFilterComponent dataList={excludes} title="Excludes" category="excludes" />
          <div className="btn-container">
            <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
            <button onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      }
    </div>
  );
}

export default FilterComponent;