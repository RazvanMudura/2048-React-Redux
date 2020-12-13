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

const Moves = () => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.game.numberAdded);
  console.log(add);
  dispatch(randomNumber());
  console.log(add);
};
