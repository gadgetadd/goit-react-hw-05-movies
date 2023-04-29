import MovieListItem from 'components/MovieListItem/MovieListItem';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <MovieListItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster}
        ></MovieListItem>
      ))}
    </ul>
  );
}
