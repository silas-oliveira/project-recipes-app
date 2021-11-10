import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import initialRequest from '../services/mealsAPI';

const MAX_RECIPES = 12;

function Comidas() {
  const { meals, setMeals } = useContext(ContextAppReceita);

  async function initialMeals() {
    const getMeals = await initialRequest();
    console.log(getMeals);
    setMeals(getMeals);
  }

  useEffect(() => {
    initialMeals();
  }, []);

  return (
    <div>
      <Header title="Comidas" search />
      <h1>Comidas</h1>
      {meals.slice(0, MAX_RECIPES).map((meal, index) => (
        <div
          key={ meal.idMeal }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            src={ meal.strMealThumb }
            alt="meal"
            data-testid={ `${index}-card-img` }
          />
          <span data-testid={ `${index}-card-name` }>
            {meal.strMeal}
          </span>
        </div>
      ))}
      <Footer />
    </div>

  );
}

export default Comidas;
