import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProvideAppReceita from './ContextAPI/ProvideAppReceita';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';

function App() {
  return (
    <ProvideAppReceita>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </ProvideAppReceita>
  );
}

export default App;
