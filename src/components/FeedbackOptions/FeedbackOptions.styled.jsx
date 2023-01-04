import styled from '@emotion/styled';

export const ListOfButtons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ButtonsItem = styled.li`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  text-transform: uppercase;
  color: #403075;
  background-color: #be7fad;
  border: 1px solid #403075;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: #be7fad;
    background-color: #615192;
  }
`;
