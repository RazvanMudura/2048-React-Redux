import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Grid } from "./Grid";
import { Score } from "./Score";
import { Moves } from "./Moves";
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
          color: "lightblue",
        }}
      >
        2048
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <Score />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid />
        {<Moves />}
      </div>
    </Provider>
  );
};

export default App;
