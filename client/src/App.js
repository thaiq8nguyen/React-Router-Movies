import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
        <div className="column is-one-third">
          <aside>
            <SavedList list={savedList} />
          </aside>
        </div>
        <div className="column">
        <Route exact path="/" component={MovieList}/>
      
      <Route path="/movies/:id" render={({match}) => <Movie id={match.params.id} saveMovie={addToSavedList}/>}/>
        </div>
        </div>
        
      </div>
      

      
    </section>
  );
};

export default App;
