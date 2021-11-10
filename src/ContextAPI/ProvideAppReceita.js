import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import ContextAppReceita from './ContextAppReceita';
import { getMeals, getDrinks } from '../services/requestApi';

function ProvideAppReceita({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function initialRecipes() {
      const drinksRes = await getDrinks();
      const mealsRes = await getMeals();
      setDrinks(drinksRes);
      setMeals(mealsRes);
    }
    initialRecipes();
  }, []);

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
