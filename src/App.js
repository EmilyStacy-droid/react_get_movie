import React from 'react';
import Header from './api/app/Header.jsx';
import { MovieList } from './api/app/MovieList';
import {MovieItem} from './api/app/MovieItem';
import {AddMovie} from './api/app/AddMovie';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
         <Route path="/movie/addNew" component= {AddMovie} />
         <Route path="/" component={MovieList}/>
          <Route path="/movies" component={MovieList} />
          <Route path="/movie/:movieId" component = {MovieItem} />
         
        </Switch>
      </Router>
    </>
  );
}

export default App;
