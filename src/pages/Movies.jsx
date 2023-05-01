import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import API from 'services/api';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MoviesList/MoviesList';
import PageTitle from 'components/PageTitle/PageTitle';
import Loader from 'components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const search = searchParams.get('q') ?? '';
  const isLoaded = movies !== null;

  const handleSubmit = query => {
    setSearchParams({ q: query.trim().toLowerCase() });
  };

  const hadleFetchSearch = useCallback(async () => {
    if (search !== '') {
      try {
        const response = await API.search(search);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    }
  }, [search]);

  useEffect(() => {
    hadleFetchSearch();
  }, [hadleFetchSearch]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} value={search}></SearchForm>
      {search &&
        ((!isLoaded && <Loader />) ||
          (isLoaded && (
            <>
              <PageTitle title={`Search results for "${search}"`} />
              <MovieList movies={movies}></MovieList>
            </>
          )))}
    </>
  );
}
