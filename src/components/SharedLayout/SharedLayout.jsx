import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Navigation,
  NavigationLink,
} from './SharedLayout.styled';





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
        <Outlet />
      </Container>
    </>
  );
}

