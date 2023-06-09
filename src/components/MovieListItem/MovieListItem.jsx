import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Item, Title, MovieLink } from './MovieListItem.styled';

export default function MovieListItem({ title, poster, id }) {
  const location = useLocation();

  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <img src={poster} alt={title} />
        <Title>{title}</Title>
      </MovieLink>
    </Item>
  );
}

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
