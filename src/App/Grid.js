import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Grid = () => {
  return (
    <div
      id="grid"
      style={{
        border: "1px #FF7F50",
        backgroundColor: "#FF7F50",
        width: "330px",
        height: "330px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        boxSizing: "border-box",
        justifyContent: "right",
        alignItems: "flex-start",
        flexWrap: "wrap",
        borderRadius: "5px",
      }}
    >
      <RenderSquares />
    </div>
  );
};

export const RenderSquares = () => {
  const mat = useSelector((state) => state.board.matrix);
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
          style={{
            backgroundColor: "rgb(248, 217, 11)",
          }}
        >
          {mat[i][j] > 0 ? mat[i][j] : undefined}
        </div>
      );
    }
  }
  return arrResult;
};
