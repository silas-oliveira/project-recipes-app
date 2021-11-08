import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProvideAppReceita from './ContextAPI/ProvideAppReceita';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Comidas from './Pages/Comidas';
import Bebidas from './Pages/Bebidas';
import Explorar from './Pages/Explorar';
import Perfil from './Pages/Perfil';
import ComidasIds from './Pages/ComidasIds';
import BebidasIds from './Pages/BebidasIds';
import ExplorarComidas from './Pages/ExplorarComidas';
import ExplorarBebidas from './Pages/ExplorarBebidas';
import ExplorarIngredientes from './Pages/ExplorarIngredientes';
import ExplorarComidasOrigem from './Pages/ExplorarComidasOrigem';
import ReceitasFeitas from './Pages/ReceitasFeitas';
import ReceitasFavoritas from './Pages/ReceitasFavoritas';

function App() {
  return (
    <ProvideAppReceita>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/comidas/:id" component={ ComidasIds } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/bebidas/:id" component={ BebidasIds } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explorar/:id/ingredientes"
          component={ ExplorarIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarComidasOrigem } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route exact path="/perfil" component={ Perfil } />
      </Switch>
    </ProvideAppReceita>
  );
}

export default App;
