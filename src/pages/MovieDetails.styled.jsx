import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.div`
  display: flex;
  gap: 40px;
  border-bottom: 2px solid whitesmoke;
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
`;
export const SubTitle = styled.h3`
  font-size: 24px;
`;
export const Text = styled.p`
  margin: 0;
  opacity: 0.9;
`;
export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #18272f;
  border: 1px solid #18272f;
  border-radius: 5px;
  padding: 2px 8px;

  :hover {
    color: #6317a1;
  }
`;
