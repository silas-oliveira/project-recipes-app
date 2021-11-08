import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProvideAppReceita from './ContextAPI/ProvideAppReceita';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Comidas from './Pages/Comidas';
import Bebidas from './Pages/Bebidas';
import Explorar from './Pages/Explorar';

function App() {
  return (
    <ProvideAppReceita>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
      </Switch>
    </ProvideAppReceita>
  );
}

export default App;
