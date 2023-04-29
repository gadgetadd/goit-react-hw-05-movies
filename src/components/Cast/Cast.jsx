import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/api';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const hadleFetchCast = useCallback(async () => {
    const response = await API.cast(movieId);
    setCast(response);
  }, [movieId]);

  useEffect(() => {
    hadleFetchCast();
  }, [hadleFetchCast]);

  return (
    <ul>
      {cast.map(cast => (
        <li key={cast.id}>{cast.name}</li>
      ))}
    </ul>
  );
}
