import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProvideAppReceita from './ContextAPI/ProvideAppReceita';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Comidas from './Pages/Comidas';
import Perfil from './Pages/Perfil';

function App() {
  return (
    <ProvideAppReceita>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/perfil" component={ Perfil } />
      </Switch>
    </ProvideAppReceita>
  );
}

export default App;
