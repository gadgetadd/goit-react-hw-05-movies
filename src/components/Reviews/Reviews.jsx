import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const hadleFetchReviews = useCallback(async () => {
    const response = await API.reviews(movieId);
    setReviews(response);
  }, [movieId]);

  useEffect(() => {
    hadleFetchReviews();
  }, [hadleFetchReviews]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>{review.content}</li>
      ))}
    </ul>
  );
}
