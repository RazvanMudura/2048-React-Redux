import React from "react";
import { restartGame } from "../Redux/actions";
import { useDispatch } from "react-redux";

export const RestartButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={dispatch(restartGame())}>Restart</button>
    </div>
  );
};
