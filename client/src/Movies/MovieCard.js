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
        <p>Year: {props.movie.Year}</p>
      </div>
      
      {/* <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div> */}
      {/* <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))} */}
    </div>
  )
};

export default MovieCard;
