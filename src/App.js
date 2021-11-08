import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProvideAppReceita from './ContextAPI/ProvideAppReceita';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Bebidas from './Pages/Bebidas';
import Comidas from './Pages/Comidas';

function App() {
  return (
    <ProvideAppReceita>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/comidas" component={ Comidas } />
      </Switch>
    </ProvideAppReceita>
  );
}

export default App;
