import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../Redux/actions";

export const Grid = () => {
  return (
    <div className="grid">
      <RenderSquares />
    </div>
  );
};

export const RenderSquares = () => {
  const dispatch = useDispatch();
  const mat = useSelector((state) => state.board.matrix);
  const size = useSelector((state) => state.board.gridSize);
  const ended = useSelector((state) => state.board.ended);

  var arrResult = [];
  if (!ended) {
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
  } else {
    arrResult.push(
      <div style={{ margin: "auto" }}>
        <div className="scoreTitle">Game Over!</div>
        <button
          className="box"
          onClick={() => {
            dispatch(restartGame());
          }}
        >
          New Game
        </button>
      </div>
    );
  }
  return arrResult;
};
