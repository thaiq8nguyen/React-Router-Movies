import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = newMovie => {
    const movieIsOnList = savedList.findIndex(movie => movie.Title === newMovie.Title )
    
    if (movieIsOnList === -1) {
      setSavedList( [...savedList, newMovie] );
    } else {
      console.log("The movie is already on the saved list");
    }
    
  };

  const clearSavedList = () => {
    setSavedList([]);
  }

  return (
    <div>
      <Navbar/>
      <section className="section">
      <div className="container">
        <Search/>
        <div className="columns">
        <div className="column is-one-quarter">
          <aside>
            <SavedList list={savedList} clearList={clearSavedList} />
          </aside>
        </div>
        <div className="column">
        <Route exact path="/" component={MovieList}/>
      
        <Route path="/movies/:id" render={props => {
          
          return <Movie {...props} saveMovie={addToSavedList}/>
        }}/>
        </div>
        </div>
        
      </div>
      

      
    </section>
    </div>
    
  );
};

export default App;
