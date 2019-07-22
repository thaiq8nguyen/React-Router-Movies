import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link key={movie.id} 
        to={`/movies/${movie.id}`}
        >
        {movie.title}
      </Link>
      
    ))}
    {/* <div className="home-button">Home</div> */}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;
