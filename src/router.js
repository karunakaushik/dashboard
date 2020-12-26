// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Uifirst from './components/uifirst';
import UISecond from './components/uisecond';

function Routerpage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/uifirst" component={Uifirst} />
        <Route exact path="/uisecond" component={UISecond} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routerpage;
