import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Apresentation from './components/Apresentation'
import CreateDevice from './components/CreateDevice'
import ListDevices from './components/ListDevices'

import MenuLeftBar from './components/MenuLeftBar'

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Apresentation} />
    <Route path="/createdevice" component={CreateDevice} />
    <Route path="/listdevice" component={ListDevices} />
    <Route path="*" component={() => <h1>Página não encontrada</h1>} />
  </Switch>
    <MenuLeftBar />
    
  </BrowserRouter>
);

export default Routes;