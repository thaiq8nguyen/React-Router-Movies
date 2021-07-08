import React, { useState, useEffect } from 'react';
import axios from 'axios';
import omdbAPI from "../services/omdbAPI";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
const MovieList = props => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
  
    const getMovies = () => {
      omdbAPI.getMovies().then(response => {
        setMovies(response.data.Search);
        
      })
      .catch(error => {
        console.log(error)
      })
    }

    getMovies();
  }, []);
  
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline">
        
      {movies.map(movie => (
        <div className="column is-one-third" key={movie.imdbID}>
            <MovieDetails key={movie.imdbID} movie={movie} />
        </div>
        
      ))}
    
        </div>
      </div>
    </div>
    
  );
}

function MovieDetails({ movie }) {
  
  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <MovieCard movie={movie}/>
    </Link>
    
  );
}

export default MovieList;
