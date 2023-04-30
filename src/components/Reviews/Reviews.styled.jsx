import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 20px auto;
  padding: 0 20px;
`;
export const Item = styled.li`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  padding: 10px 0;
  font-size: 24px;
  margin: 10px 0;
`;

export const Name = styled.p`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0;
  margin-bottom: 10px;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Content = styled.p`
  margin: 0;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
