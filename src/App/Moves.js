import { useSelector, useDispatch } from "react-redux";
import {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  addNumber,
  randomNumber,
  restartGame,
  incrementScore,
  incrementBest,
} from "../Redux/actions";

export const Moves = () => {
  const dispatch = useDispatch();

  addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      dispatch(moveUp());
      dispatch(incrementScore(2));
      dispatch(addNumber());
    }
    if (e.key === "ArrowDown") dispatch(moveDown());
    if (e.key === "ArrowLeft") dispatch(moveLeft());
    if (e.key === "ArrowRight") dispatch(moveRight());
  });
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
