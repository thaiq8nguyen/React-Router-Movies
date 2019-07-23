import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from "./MovieCard";

const Movie = ({id, saveMovie}) => {
  const [movie, setMovie] = useState();
  
  useEffect(() => {
   
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

      //  axios
      //   .get(`http://localhost:5000/api/movies/${id}`)
      //   .then(response => {
      //     setMovie(response.data);
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const save = () => {
    
    saveMovie(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="box">
        <div className="level">
          <div className="level-left">
            <MovieCard movie={movie}/>
          </div>
        <div className="level-right">
          <button className="button is-info" onClick={save}>Save</button>
        </div>
    </div>
    </div>
    
  );
}

export default Movie;
