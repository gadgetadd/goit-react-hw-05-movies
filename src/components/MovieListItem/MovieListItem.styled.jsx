import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  display: flex;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 300ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const Title = styled.p`
  padding: 12px;
  color: #0f0f0f;
  font-weight: 500;
  text-align: center;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;
