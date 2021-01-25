import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieArr, setmovieArr] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setmovieArr(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieArr' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
    {/* <Switch>   */}
      {/* <SavedList list={[  This is stretch ]} /> */}
      <Route path={'/movies/:movieID'}>
        <Movie movieArr={movieArr}/>
      </Route>
      <Route exact path='/'>
        <MovieList movieArr={movieArr}/>
      </Route>
    {/* </Switch> */}
    </div>
  );
}
