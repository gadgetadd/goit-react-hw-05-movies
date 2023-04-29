import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'services/api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const search = searchParams.get('q') ?? '';

  const handleSubmit = query => {
    setSearchParams({ q: query.trim().toLowerCase() });
  };

  const hadleFetchSearch = useCallback(async () => {
    const response = await API.search(search);
    setMovies(response);
  }, [search]);

  useEffect(() => {
    hadleFetchSearch();
  }, [hadleFetchSearch]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      <MovieList movies={movies}></MovieList>
    </div>
  );
}
