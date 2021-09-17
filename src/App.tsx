import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Evolution from "./pages/Evolution/Evolution";
import Machines from "./pages/Machines/Machines";
import Moves from "./pages/Moves/Moves";
import Pokemon from "./pages/Pokemon/Pokemon";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-4">
        <nav className="flex flex-col justify-start items-center h-screen col-span-1 bg-red-600">
          <ul>
            <li className="p-6 text-center border-b-2 hover:bg-red-100">
              <Link to="/pokemon">Pokemon</Link>
            </li>
            <li className="p-6 text-center border-b-2 hover:bg-red-100">
              <Link to="/moves">Moves</Link>
            </li>
            <li className="p-6 text-center border-b-2 hover:bg-red-100">
              <Link to="/machines">Machines</Link>
            </li>
            <li className="p-6 text-center border-b-2 hover:bg-red-100">
              <Link to="/evolution">Evolution</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-start items-center h-screen col-span-3 bg-gray-200">
          <Switch>
            <Route exact path="/pokemon">
              <Pokemon />
            </Route>
            <Route exact path="/moves">
              <Moves />
            </Route>
            <Route exact path="/machines">
              <Machines />
            </Route>
            <Route exact path="/evolution">
              <Evolution />
            </Route>
            <Route exact path="/">
              <Pokemon />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
