import styled from 'styled-components';
import getRandomHexColor from 'getRandomColor';

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: -1px -2px 10px ${getRandomHexColor},
      5px 5px 20px ${getRandomHexColor};
  }
`;

export const StyledSpan = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 30px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const StyledImg = styled.img`
  width: 48px;
`;

export const StyledName = styled.p`
  font-size: 40px;
`;
