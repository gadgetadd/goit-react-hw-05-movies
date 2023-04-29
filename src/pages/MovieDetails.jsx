import { useState, useCallback, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import API from 'services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState(null);

  const hadleFetchDetails = useCallback(async () => {
    const response = await API.details(movieId);

    setMovie(response);
  }, [movieId, setMovie]);

  useEffect(() => {
    hadleFetchDetails();
  }, [hadleFetchDetails]);
  return (
    movie && (
      <>
        <Link to={backLinkHref}>Back</Link>
        <img src={movie.poster} alt={movie.title} />
        <h2>{[movie.title, movie.year]}</h2>
        <h3>{movie.userScore}</h3>
        <p>{movie.overview}</p>
        <p>{movie.genres}</p>
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
        <Outlet />
      </>
    )
  );
}
