import React, { useState, useEffect } from 'react';
import axios from 'axios';
import omdbAPI from "../services/omdbAPI";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    // const getMovies = () => {
    //   axios
    //     .get('http://localhost:5000/api/movies')
    //     .then(response => {
    //       setMovies(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Server Error', error);
    //     });
    // }
    
    // getMovies();
    const getMovies = () => {
      omdbAPI.getMovies().then(response => {
        setMovies(response.data.Search);
        console.log(response.data.Search);
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
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie}/>
    </Link>
    
  );
}

export default MovieList;
