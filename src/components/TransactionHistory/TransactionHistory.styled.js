import styled from 'styled-components';
import getRandomHexColor from 'getRandomColor';

export const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-shadow: 1px 1px 1px grey;
  text-align: center;
  padding: 10px;
`;
export const StyledHeader = styled.thead`
  padding: 10px;
  border: 1px solid black;
`;

export const StyledColumn = styled.th`
  width: 250px;
`;
export const StyledBody = styled.tbody`
  font-size: 40px;
`;

export const StyledRow = styled.tr`
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${getRandomHexColor};
    box-shadow: -5px -5px 10px #fff, 5px 8px 15px #233fa4;
  }
`;

export const StyledCell = styled.td`
  padding: 10px;
`;
