import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="container-fluid no-gutters">
      <Header title="title" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Catalog/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
