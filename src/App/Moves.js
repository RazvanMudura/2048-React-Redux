import { useSelector, useDispatch } from "react-redux";
import {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  addNumber,
  incrementScore,
  startGame,
  endGame,
  randomNumber,
} from "../Redux/actions";
import { store } from "./App";

export const Moves = () => {
  const dispatch = useDispatch();
  const started = useSelector((state) => state.board.started);
  const ended = useSelector((state) => state.board.ended);
  const exMat = useSelector((state) => state.board.matrix);

  if (!ended) {
    addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp") {
        dispatch(moveUp());
      }
      if (e.key === "ArrowDown") {
        dispatch(moveDown());
      }
      if (e.key === "ArrowLeft") {
        dispatch(moveLeft());
      }
      if (e.key === "ArrowRight") {
        dispatch(moveRight());
      }
    });
  }
  return null;
};

const isFinished = () => {
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

export const scoreAdder = () => {
  store.dispatch(incrementScore(2));
};
