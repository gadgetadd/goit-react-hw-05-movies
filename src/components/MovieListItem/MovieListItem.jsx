import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function MovieListItem({ title, poster, id }) {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>{title}</div>
        <div>
          <img src={poster} alt={title} />
        </div>
      </Link>
    </li>
  );
}
