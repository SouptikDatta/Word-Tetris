import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return <StyledCell type={type} color={TETROMINOS[type]} />;
};

export default Cell;
