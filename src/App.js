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
import ExplorarComidasIngredientes from './Pages/ExplorarComidasIngredientes';
import ExplorarBebidasIngredientes from './Pages/ExplorarBebidasIngredientes';
import ExplorarComidasOrigem from './Pages/ExplorarComidasOrigem';
import ReceitasFeitas from './Pages/ReceitasFeitas';
import ReceitasFavoritas from './Pages/ReceitasFavoritas';
import ReceitaComidaEmProcesso from './Pages/ReceitaComidaEmProcesso';
import ReceitaBebidaEmProcesso from './Pages/ReceitaBebidaEmProcesso';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <ProvideAppReceita>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/comidas/:id" component={ ComidasIds } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/bebidas/:id" component={ BebidasIds } />
        <Route
          exact
          path="/comidas/:id/in-progress"
          component={ ReceitaComidaEmProcesso }
        />
        <Route
          exact
          path="/bebidas/:id/in-progress"
          component={ ReceitaBebidaEmProcesso }
        />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExplorarComidasIngredientes }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExplorarBebidasIngredientes }
        />
        <Route exact path="/explorar/comidas/area" component={ ExplorarComidasOrigem } />
        <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route component={ NotFound } />
      </Switch>
    </ProvideAppReceita>
  );
}

export default App;
