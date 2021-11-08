import React, { useState } from 'react';
import PropType from 'prop-types';
import ContextAppReceita from './ContextAppReceita';

function ProvideAppReceita({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const context = { meals, setMeals, drinks, setDrinks };
  return (
    <ContextAppReceita.Provider value={ context }>
      {children}
    </ContextAppReceita.Provider>
  );
}

ProvideAppReceita.propTypes = {
  children: PropType.node.isRequired,
};

export default ProvideAppReceita;
