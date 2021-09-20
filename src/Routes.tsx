import React from "react";
import { Route, Switch } from "react-router";
import Moves from "./pages/Moves/Moves";
import Pokemon from "./pages/Pokemon/Pokemon";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/pokemon">
        <Pokemon />
      </Route>
      <Route path="/pokemon/:id">
        <PokemonDetail />
      </Route>
      <Route exact path="/moves">
        <Moves />
      </Route>
      <Route exact path="/">
        <Pokemon />
      </Route>
    </Switch>
  );
};

export default Routes;
