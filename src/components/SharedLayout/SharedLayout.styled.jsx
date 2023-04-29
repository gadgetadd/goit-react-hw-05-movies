import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 12px;
`;

export const Header = styled.header`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 20px;
`;
export const NavigationLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #18272f;

  &.active {
    color: #6317a1;
    ::before {
      background-color: #6317a1;
    }
  }
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: -5px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
