import React from 'react';
import "./MovieCard.scss"
const MovieCard = props => {
  return(
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.movie.Poster} alt=""/>
        </figure>
      </div>
      <div className="card-content">
        <p className="is-size-4 has-text-weight-bold">{props.movie.Title}</p>
        <p>Year: <span className="has-text-grey">{props.movie.Year}</span></p>
      </div>
    
    </div>
  )
};

export default MovieCard;
