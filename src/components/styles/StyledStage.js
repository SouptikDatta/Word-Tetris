import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(35vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 2px;
  border: 1px solid #7BEDFA;
  width: 100%;
  max-width: 45vw;
  background: #058593;
  border-radius: 3px;
  user-select: none;
  flex-grow: 1;
`;