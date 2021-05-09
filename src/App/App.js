import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Grid } from "./Grid";
import { Score } from "./Score";
import { Moves } from "./Moves";
import { appReducer } from "../Redux/reducers";

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div>
          <div className="title">2048</div>
          <div>
            <Grid />
            <Moves />
          </div>
        </div>
        <div>
          <Score />
        </div>
      </div>

      <div className="info">
        Regulile Jocului : Foloseste-te de sageti pentru a muta patratele.
        Patratele cu acelasi numar se combina cand se ating. Combina-le pentru a
        ajunge la 2048.
      </div>
    </Provider>
  );
};

export default App;
