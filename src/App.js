import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FeedPage from "./pages/Feed";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/feed">
          <FeedPage />
        </Route>
        <Route path="*">
          <Redirect to="/feed" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
