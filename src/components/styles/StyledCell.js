import styled from "styled-components";

const StyledCellOut = styled.div`
  width: auto;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 1;
  border: 1px solid rgb(11, 219, 164);
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? "0px solid" : "1px solid")};
  border-bottom-color: rgba(${(props) => props.type !== 0 && props.color}, 0.1);
  border-right-color: rgba(${(props) => props.type !== 0 && props.color}, 1);
  border-top-color: rgba(${(props) => props.type !== 0 && props.color}, 1);
  border-left-color: rgba(${(props) => props.type !== 0 && props.color}, 0.3);
`;

export const StyledCell = (props) => {
  return (
    <StyledCellOut type={props.type} color={props.color}>
      {props.type !== 0 && props.type}
    </StyledCellOut>
  );
};
