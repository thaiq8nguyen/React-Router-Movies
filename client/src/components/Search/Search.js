import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import omdbAPI from "../../services/omdbAPI";
import MovieCard from "../../Movies/MovieCard";


const Search = () => {
    const [movies, setMovies] = useState([]);
    const [movieTitle, setMovieTitle] = useState("The Matrix")
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();

        console.log(movieTitle)

        omdbAPI.getMoviesByTitle(movieTitle)
        .then(response => {
            console.log(response.data)
            setMovies(response.data.Search)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleInput = (event) => {
        setMovieTitle(event.target.value);
    }

    const clearMovies = () => {
        
        setMovies([]);
        
        
    }
    return (
        <div>
            <div className="notification">
            <form action="#" onSubmit={handleSearchSubmit}>
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input type="text" className="input" placeholder="Movie Title" onChange={handleInput}/>
                    </p>
                    
                    <div className="control">
                        <a href="#" className="button is-dark" type="submit">Search</a>
                        
                    </div>
                    <div className="control">
                        {movies.length > 0 &&<a href="#" className="button" onClick={clearMovies}>Clear</a>}
                    </div>
                </div>
            </form>
            </div>
            {movies.length > 0 && <article className="notification has-background-dark">
                <div className="columns is-multiline">
                    
                    {movies.constructor === Array ? movies.map(movie => (
                        <div className="column is-one-quarter" key={movie.imdbID}>
                            <Link to={`/movies/${movie.imdbID}`} onClick={clearMovies}>
                                <MovieCard movie={movie}/>
                            </Link>
                            
                            </div>
                    )) : <div className="column is-one-quarter">
                            <Link to={`/movies/${movies.imdbID}`} onClick={clearMovies}>
                                <MovieCard movie={movies}/>
                            </Link>
                            
                        </div>}
                    </div>
                    
            </article>}
        </div>
        
    )
}

export default Search
