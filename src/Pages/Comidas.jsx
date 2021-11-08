import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

function Comidas() {
  const { meals } = useContext(ContextAppReceita);
  return (
    <div>
      <Header title="Comidas" search />
      <h1>Comidas</h1>
      {meals.map((meal, index) => (
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
