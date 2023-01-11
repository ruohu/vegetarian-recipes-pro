import React from 'react';
import './CardComponent.scss';
import { Link } from 'react-router-dom';

const CardComponent = ({ id, image, title }) => {

  return (
    <Link to={"/recipe/" + id} >
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );

}

export default CardComponent;