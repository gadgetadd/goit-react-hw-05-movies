import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';

import API from 'services/api';
import { List, Item, Name, Content } from './Reviews.styled';
import { Fallback } from 'components/Fallback/Fallback.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const isEmpty = reviews?.length === 0;
  const isLoaded = reviews !== null;

  const hadleFetchReviews = useCallback(async () => {
    const response = await API.reviews(movieId);
    setReviews(response);
  }, [movieId]);

  useEffect(() => {
    hadleFetchReviews();
  }, [hadleFetchReviews]);

  return (
    <List>
      {!isLoaded && <Fallback>Loading</Fallback>}
      {isLoaded && isEmpty && (
        <Item>Sorry, there is no reviews yet</Item>
      )}
      {isLoaded &&
        !isEmpty &&
        reviews.map(review => (
          <Item key={review.id}>
            <Name>
              <RxAvatar />
              {review.author}
            </Name>
            <Content>{review.content}</Content>
          </Item>
        ))}
    </List>
  );
}
