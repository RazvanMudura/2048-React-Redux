import React from "react";
import { useSelector } from "react-redux";

export const Grid = () => {
  return (
    <div className="grid">
      <RenderSquares />
    </div>
  );
};

export const RenderSquares = () => {
  const mat = useSelector((state) => state.board.matrix);
  console.log(mat);
  const size = useSelector((state) => state.board.gridSize);
  var arrResult = [];
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      arrResult.push(
        <div
          row={i}
          collumn={j}
          id={String(i) + String(j)}
          key={String(i) + String(j)}
          className="square"
        >
          {mat[i][j] > 0 ? mat[i][j] : null}
        </div>
      );
    }
  }
  return arrResult;
};
