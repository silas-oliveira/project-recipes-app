import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import ContextAppReceita from './ContextAppReceita';
import {
  getMeals,
  getDrinks,
  getDrinksIngredients,
  getMealsIngredients } from '../services/requestApi';

function ProvideAppReceita({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [drinksIngredients, setDrinksIngredients] = useState([]);

  useEffect(() => {
    async function initialRecipes() {
      const drinksRes = await getDrinks();
      const mealsRes = await getMeals();
      const drinksIngredientsRes = await getDrinksIngredients();
      const mealsIngredientsRes = await getMealsIngredients();
      setDrinks(drinksRes);
      setMeals(mealsRes);
      setMealsIngredients(mealsIngredientsRes);
      setDrinksIngredients(drinksIngredientsRes);
    }
    initialRecipes();
  }, []);

  const context = {
    meals,
    setMeals,
    drinks,
    setDrinks,
    mealsIngredients,
    drinksIngredients,
  };
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
