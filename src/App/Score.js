import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  endGame,
  incrementBest,
  incrementScore,
  restartGame,
  randomNumber,
  addNumber,
  startGame,
} from "../Redux/actions";

export const Score = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.board.score);
  const best = useSelector((state) => state.board.best);
  const size = useSelector((state) => state.board.gridSize);
  const mat = useSelector((state) => state.board.matrix);
  const started = useSelector((state) => state.board.started);

  if (best < score) {
    dispatch(incrementBest(score));
  }

  if (isFinished(size, mat)) {
    dispatch(endGame());
  }

  if (!started) {
    dispatch(randomNumber());
    dispatch(addNumber());
    dispatch(randomNumber());
    dispatch(addNumber());
    dispatch(startGame());
  }

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

const isFinished = (size, mat) => {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (
        (i != 3 && mat[i][j] == mat[i + 1][j]) ||
        (j != 3 && mat[i][j] == mat[i][j + 1]) ||
        mat[i][j] == 0
      ) {
        return false;
      }
    }
  }
  return true;
};
