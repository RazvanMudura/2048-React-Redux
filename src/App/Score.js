import React from "react";
import { useSelector } from "react-redux";

export const Score = () => {
  const score = useSelector((state) => state.board.score);
  const best = useSelector((state) => state.board.best);
  return (
    <div id="score" style={{ display: "flex" }}>
      <div
        style={{
          textAlign: "center",
          borderRadius: "3px",
          backgroundColor: "rgb(248, 217, 11)",
          margin: "5px",
        }}
      >
        <div style={{ color: "#FF7F50" }}>Score</div>
        <div style={{ color: "white" }}>{score}</div>
      </div>
      <div
        style={{
          textAlign: "center",
          borderRadius: "3px",
          backgroundColor: "rgb(248, 217, 11)",
          margin: "5px",
        }}
      >
        <div style={{ color: "#FF7F50" }}>Best</div>
        <div style={{ color: "white" }}>{best}</div>
      </div>
    </div>
  );
};
