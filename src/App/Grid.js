import React, { useRef, useEffect } from "react";
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
  // const mat = useSelector((state) => state.board.matrix);
  const mat = [[0, 0, 0, 0][(0, 0, 0, 0)][(0, 0, 0, 0)][(0, 0, 0, 0)]];
  console.log(mat);
  var arrResult = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      arrResult.push(
        <div
          row={i}
          collumn={j}
          id={String(i) + String(j)}
          key={String(i) + String(j)}
          className="square"
          style={{
            backgroundColor: "#F2E50B",
          }}
        >
          2
        </div>
      );
    }
  }
  return arrResult;
};
