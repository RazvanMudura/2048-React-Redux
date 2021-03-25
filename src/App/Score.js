import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementBest, restartGame } from "../Redux/actions";

export const Score = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.board.score);
  const best = useSelector((state) => state.board.best);

  if (best < score) {
    dispatch(incrementBest(score));
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
        <button className="box">New Game</button>
      </div>
    </div>
  );
};
