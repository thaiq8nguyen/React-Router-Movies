import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import omdbAPI from "../services/omdbAPI";

import About from "../components/Movie/About";
import Actors from "../components/Movie/Actors";
import Writers from "../components/Movie/Writers";

const Movie = (props) => {
  const [movie, setMovie] = useState();

  const imdbID = props.match.params.id;
  console.log("Inside Movie: ",props)
  

  useEffect(() => {
   
    const getMovieByID = () => {
      omdbAPI.getMovieByID(imdbID)
      .then(response => {
        setMovie(response.data);
        
      })
      .catch(error => {
        console.log(error)
      })
    }

    getMovieByID();

  },[imdbID]);
  
  const save = (event) => {
    event.preventDefault();
    const saveMovie = props.saveMovie;
    saveMovie(movie);
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <img src={movie.Poster} alt=""/>
        </figure>
        <div className="media-content">
          <div className="tabs">
            <ul>
              <Link to={`/movies/${movie.imdbID}`} className="is-active">Movie</Link>
              <Link to={`/movies/${movie.imdbID}/actors`}className="">Actors</Link>
              <Link to={`/movies/${movie.imdbID}/writers`}className="">Writers</Link>
            </ul>
          </div>
          
          
          <Route exact path="/movies/:id" render={props => <About movie={ {
              imdbRating: movie.imdbRating,
              title: movie.Title,
              director: movie.Director,
              year: movie.Year,
              rated: movie.Rated,
              metascore: movie.Metascore,
              plot: movie.Plot
            }} 
            />
            }
          />
          <Route path="/movies/:id/actors" render={props => <Actors actors={movie.Actors} />}/>
          <Route path="/movies/:id/writers" render={props => <Writers writers={movie.Writer}/>}/>
          
          
        </div>
      </article>
      <div className="level">
        <div className="level-left">
          
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" className="button is-info level-item">IMDB</a>
          <a href="" className="button level-item" onClick={save}>Save</a>
          </div>
          
        
      </div>
    </div>
        
    
    
    
  );
}

export default Movie;
