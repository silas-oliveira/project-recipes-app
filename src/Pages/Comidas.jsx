import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderCategories from '../Components/RenderCategories';

const MAX_RECIPES = 12;

function Comidas() {
  const { meals } = useContext(ContextAppReceita);

  return (
    <div>
      <Header title="Comidas" search />
      <RenderCategories local="comidas" />
      <h1>Comidas</h1>
      {meals.slice(0, MAX_RECIPES).map((meal, index) => (
        <Link
          to={ `/comidas/${meal.idMeal}` }
          key={ meal.idMeal }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            src={ meal.strMealThumb }
            alt="meal"
            data-testid={ `${index}-card-img` }
            className="card-img"
          />
          <span data-testid={ `${index}-card-name` }>
            {meal.strMeal}
          </span>
        </Link>
      ))}
      <Footer />
    </div>

  );
}

export default Comidas;
