import { useState, useEffect, useCallback } from 'react';
import MovieList from 'components/MoviesList/MoviesList';
import API from 'services/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const hadleFetchPopular = useCallback(async () => {
    const response = await API.popular();
    setMovies(response);
  }, []);

  useEffect(() => {
    hadleFetchPopular();
  }, [hadleFetchPopular]);

  return <MovieList movies={movies}></MovieList>;
}
