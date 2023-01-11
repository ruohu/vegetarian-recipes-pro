import React from 'react';
import "./NotFound.scss"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="err">Ops...Sorry!</div>
      <div className="err2">Page NotFound</div>
      <div>Let's go <Link to="/">home</Link> and try from there!
      </div>
    </div>
  )
}

export default NotFound;