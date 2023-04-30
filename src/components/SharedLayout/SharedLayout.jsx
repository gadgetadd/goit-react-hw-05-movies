import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Header,
  Navigation,
  NavigationLink,
} from './SharedLayout.styled';
import { Fallback } from 'components/Fallback/Fallback.styled';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavigationLink to={'/'}>Home </NavigationLink>
            <NavigationLink to={'movies'}>Movies </NavigationLink>
          </Navigation>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Fallback>Loading page...</Fallback>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
