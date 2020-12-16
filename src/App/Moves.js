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
} from "../Redux/actions";

export const Moves = () => {
  const dispatch = useDispatch();
  const logic = useSelector((state) => state.game.started);
  console.log(logic);
  return (
    <div>
      <button onClick={() => dispatch(startGame())}>Move</button>
    </div>
  );
};
