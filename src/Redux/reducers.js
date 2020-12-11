import { combineReducers } from "redux";
import { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } from "./actions";

export const initialState = {
  board: {
    gridSize: 4,
    score: 0,
    best: 0,
    matrix: [],
  },
};

export const appReducer = combineReducers({ board });
