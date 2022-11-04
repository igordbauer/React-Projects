import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';





function App() {

  const [movies, setMovies] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false)
  const [error, setError] = useState(null);

  const fetchMoviesData = useCallback(async () => {
    setIsWaiting(true)
    setError(null)
    try {
      const response = await fetch('http://swapi.dev/api/films/')

      if (!response.ok) {
        throw new Error('Something went Wrong!')
      }
      const data = await response.json();
      const transformData = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        }
      })
      setMovies(transformData)
    }
    catch (error) {
      setError(error.message)
    }
    setIsWaiting(false)
  }, [])
  useEffect(() => {
    fetchMoviesData()
  }, [fetchMoviesData])

  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesData}>Fetch Movies</button>
      </section>
      <section>
        {isWaiting
          ? <p>Loading...</p>
          : <MoviesList movies={movies} />}
        {!isWaiting && movies.length === 0 && !error && <p>Found no Movies</p>}
        {!isWaiting && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
