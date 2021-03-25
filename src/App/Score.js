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
    <div
      id="score"
      style={{ display: "flex", flexDirection: "column", margin: "30px" }}
    >
      <div className="box">
        <div style={{ color: "#FF7F50" }}>Score</div>
        <div style={{ color: "white" }}>{score}</div>
      </div>
      <div className="box">
        <div style={{ color: "#FF7F50" }}>Best</div>
        <div style={{ color: "white" }}>{best}</div>
      </div>
      <div>
        <button className="box">New Game</button>
      </div>
    </div>
  );
};
