import React from 'react';
import { Link } from "react-router-dom";

const SavedList = props => {

  const clearList = (event) => {
    event.preventDefault();
    const clearSavedList = props.clearList;
    clearSavedList();
  };

  return (
    <div className="menu">
      <div className="level">
        <div className="level-left">
          <p className="menu-label level-item">Saved Movies</p>
        </div>
        <div className="level-right">
          {props.list.length > 0 &&<a href="" className="has-text-grey" onClick={clearList}>Clear</a>}
        </div>
      </div>
      
      <ul className="menu-list">
        {props.list.map(movie => (
          <li key={movie.imdbID} >
            <Link
            to={`/movies/${movie.imdbID}`}
            >
            {movie.Title}
          </Link>
          </li>
      
      
    ))}
    </ul>
    
    
  </div>
  
  )
    
  
  };

export default SavedList;
