import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import BuscaCep from '../pages/BuscarCep';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buscacep" component={BuscaCep} />
      </Switch>
    </BrowserRouter>
  );
}