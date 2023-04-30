import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MoviesList/MoviesList';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from 'services/api';
import PageTitle from 'components/PageTitle/PageTitle';

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
    <>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      {search && (
        <>
          <PageTitle title={`Search results for "${search}"`} />
          <MovieList movies={movies}></MovieList>
        </>
      )}
    </>
  );
}
