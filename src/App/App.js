import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Grid } from "./Grid";
import { useSelector, useDispatch } from "react-redux";
import { moveUp, moveDown, moveLeft, moveRight } from "../Redux/actions";
import { appReducer } from "../Redux/reducers";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          color: "grey",
        }}
      >
        2048
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
        }}
      >
        <Grid />
      </div>
    </Provider>
  );

  function key(e) {
    const dispatch = useDispatch();
    if (e.keyCode === 38) {
      dispatch(moveUp());
    }
    if (e.keyCode === 40) {
      dispatch(moveDown());
    }
    if (e.keyCode === 37) {
      dispatch(moveLeft());
    }
    if (e.keyCode === 39) {
      dispatch(moveRight());
    }
  }

  document.onkeydown = key;
};

export default App;
