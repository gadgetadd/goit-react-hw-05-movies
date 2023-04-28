import { NavLink, Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div>
      <header>
        Header
        <br />
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'movies'}>Movies </NavLink>
        <NavLink to={'details'}>Details</NavLink>
      </header>
      <Outlet />
    </div>
  );
}
