import MovieListItem from 'components/MovieListItem/MovieListItem';
import { List } from './MoviesList.styled';

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map(movie => (
        <MovieListItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster}
        ></MovieListItem>
      ))}
    </List>
  );
}
