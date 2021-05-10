import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementBest, incrementScore, restartGame } from "../Redux/actions";

export const Score = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.board.score);
  const best = useSelector((state) => state.board.best);
  const size = useSelector((state) => state.board.gridSize);
  const mat = useSelector((state) => state.board.matrix);

  if (best < score) {
    dispatch(incrementBest(score));
  }

  var s = 0;
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      s += mat[i][j];
    }
  }
  dispatch(incrementScore(s));

  return (
    <div className="score">
      <div className="box">
        <div className="scoreTitle">Score</div>
        <div className="nr">{score}</div>
      </div>
      <div className="box">
        <div className="scoreTitle">Best</div>
        <div className="nr">{best}</div>
      </div>
      <div>
        <button
          className="box"
          onClick={() => {
            dispatch(restartGame());
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
};
