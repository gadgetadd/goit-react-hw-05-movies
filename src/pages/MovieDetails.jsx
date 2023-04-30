import { useState, useCallback, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import API from 'services/api';
import {
  MainWrapper,
  ButtonWrapper,
  Title,
  SubTitle,
  Text,
  Button,
} from './MovieDetails.styled';

import { Fallback } from 'components/Fallback/Fallback.styled';

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
    <>
      <Button to={backLinkHref}>
        <MdKeyboardBackspace size="20px" />
        Go back
      </Button>
      {!movie && <Title>Loading</Title>}
      {movie && (
        <>
          <MainWrapper>
            <img src={movie.poster} alt={movie.title} />
            <div>
              <Title>{`${movie.title} (${movie.year})`}</Title>
              <Text>{`User Score: ${movie.userScore}`}</Text>
              <SubTitle>Overview</SubTitle>
              <Text>{movie.overview}</Text>
              <SubTitle>Genres</SubTitle>
              <Text>{movie.genres}</Text>
            </div>
          </MainWrapper>
          <ButtonWrapper>
            <Button to={`cast`}>Cast</Button>
            <Button to={`reviews`}>Reviews</Button>
          </ButtonWrapper>
        </>
      )}
      <Suspense fallback={<Fallback>Please wait</Fallback>}>
        <Outlet />
      </Suspense>
    </>
  );
}
