import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="menu">
    <p className="menu-label">Saved Movies</p>
    <ul className="menu-list">
    {props.list.map(movie => (
      <li key={movie.id} >
        <Link
        to={`/movies/${movie.id}`}
        >
        {movie.title}
      </Link>
      </li>
      
      
    ))}
    </ul>
    
    {/* <div className="home-button">Home</div> */}
    {/* <Link to="/" className="home-button">Home</Link> */}
  </div>
);

export default SavedList;
