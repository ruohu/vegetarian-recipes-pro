import React, { useEffect } from "react";
import './SubFilterComponent.scss';
import { useSelector, useDispatch, connect } from "react-redux";
import { addChecked, removeChecked } from "../../redux/actions";

const SubFilterComponent = ({ dataList = [], title, checkedList, category }) => {
  const dispatch = useDispatch();

  const handleChange = (id) => {
    if (checkedList[category].includes(id)) {
      dispatch(removeChecked(id, category));
    } else {
      dispatch(addChecked(id, category));
    }
  }

  useEffect(() => {

  }, []);

  return (
    <div className="subfilter-container">
      <span>{title}</span>
      <div className="subfilter-box">
        {dataList?.map((el, index) => {
          return (
            <div key={index}>
              <input type="checkbox"
                id={el.value}
                name={el.value}
                value={el.value}
                onChange={() => handleChange(el.value)}
                checked={checkedList[category].includes(el.value)}
              />
              <label htmlFor={el.value}>
                {el.description}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    checkedList: state.checkedReducer.checkedList
  }
}

export default connect(mapStateToProps)(SubFilterComponent);