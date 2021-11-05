import React from 'react';
import ProvideAppReceita from './ContextAPI/ProvideAppReceita';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';

function App() {
  return (
    <ProvideAppReceita>
      <Login />
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
    </ProvideAppReceita>
  );
}

export default App;
