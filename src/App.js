import React, {useState} from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="container-fluid no-gutters">
      <Header title="title" cart={cart}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Catalog cart={cart} setCart={setCart}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
