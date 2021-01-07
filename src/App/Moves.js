import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  addNumber,
  randomNumber,
  startGame,
  finishGame,
  restartGame,
} from "../Redux/actions";

export const Moves = () => {
  const dispatch = useDispatch();
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") dispatch(moveUp());
    if (e.key === "ArrowDown") dispatch(moveDown());
    if (e.key === "ArrowLeft") dispatch(moveLeft());
    if (e.key === "ArrowRight") dispatch(moveRight());
  });
  return null;
};
