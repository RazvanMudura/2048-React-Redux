import { useSelector, useDispatch } from "react-redux";
import { store } from "./App";
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
  endGame,
  startGame,
} from "../Redux/actions";

export const Moves = () => {
  const dispatch = useDispatch();
  const ended = useSelector((state) => state.board.ended);

  if (!ended) {
    addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp") {
        dispatch(moveUp());
        dispatch(addNumber());
      }
      if (e.key === "ArrowDown") {
        dispatch(moveDown());
        dispatch(addNumber());
      }
      if (e.key === "ArrowLeft") {
        dispatch(moveLeft());
        dispatch(addNumber());
      }
      if (e.key === "ArrowRight") {
        dispatch(moveRight());
        dispatch(addNumber());
      }
    });
  }
  return null;
};

export const Move = (state, direction) => {
  let mat = state.matrix;
  const size = state.gridSize;
  let arrMat = [];
  var i, j, row, col;
  let addedScore = 0;
  //up
  if (direction == 8) {
    for (j = 0; j < size; j++) {
      for (i = 1; i < size; i++) {
        if (mat[i][j] != 0) {
          row = i;
          while (row > 0) {
            if (!mat[row - 1][j]) {
              mat[row - 1][j] = mat[row][j];
              mat[row][j] = 0;
              row--;
            } else {
              if (mat[row][j] == mat[row - 1][j]) {
                mat[row - 1][j] *= 2;
                addedScore = mat[row - 1][j];
                mat[row][j] = 0;
                break;
              } else {
                break;
              }
            }
          }
        }
      }
    }
  }
  //down
  if (direction == 2) {
    for (j = 0; j < size; j++) {
      for (i = size - 2; i >= 0; i--) {
        if (mat[i][j]) {
          row = i;
          while (row + 1 < size) {
            if (!mat[row + 1][j]) {
              mat[row + 1][j] = mat[row][j];
              mat[row][j] = 0;
              row++;
            } else if (mat[row][j] == mat[row + 1][j]) {
              mat[row + 1][j] *= 2;
              addedScore = mat[row + 1][j];
              mat[row][j] = 0;
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }
  //left
  if (direction == 4) {
    for (i = 0; i < size; i++) {
      for (j = 1; j < size; j++) {
        if (mat[i][j] != 0) {
          col = j;
          while (col - 1 >= 0) {
            if (!mat[i][col - 1]) {
              mat[i][col - 1] = mat[i][col];
              mat[i][col] = 0;
              col--;
            } else if (mat[i][col] == mat[i][col - 1]) {
              mat[i][col - 1] *= 2;
              addedScore = mat[i][col - 1];
              mat[i][col] = 0;
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }
  //right
  if (direction == 6) {
    for (i = 0; i < size; i++) {
      for (j = size - 2; j >= 0; j--) {
        if (mat[i][j]) {
          col = j;
          while (col + 1 < size) {
            if (!mat[i][col + 1]) {
              mat[i][col + 1] = mat[i][col];
              mat[i][col] = 0;
              col++;
            } else if (mat[i][col] == mat[i][col + 1]) {
              mat[i][col + 1] *= 2;
              addedScore = mat[i][col + 1];
              mat[i][col] = 0;
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }
  //array switch
  for (var i = 0; i < size; i++) {
    let arr = [];
    for (var j = 0; j < size; j++) {
      arr.push(mat[i][j]);
    }
    arrMat.push(arr);
  }

  setTimeout(() => {
    store.dispatch(incrementScore(addedScore));
  });

  return arrMat;
};
