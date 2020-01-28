import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

 return (
    <div>
      <SavedList list={savedList} />
    <div>
  <Route exact path='/' render={() => <MovieList/>}/>
  <Route  path='/movie/:id' component={Movie}/>
  </div> 
    </div>
  );
};

export default App;
