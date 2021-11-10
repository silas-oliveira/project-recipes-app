import React, { useContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import RenderCategories from '../Components/RenderCategories';

const MAX_RECIPES = 12;

function Bebidas() {
  const { drinks } = useContext(ContextAppReceita);

  return (
    <>
      <Header title="Bebidas" search />
      <RenderCategories local="bebidas" />
      <h1>Bebidas</h1>
      {drinks.slice(0, MAX_RECIPES).map((drink, index) => (
        <div
          key={ drink.idDrink }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            src={ drink.strDrinkThumb }
            alt="drink"
            data-testid={ `${index}-card-img` }
          />
          <span data-testid={ `${index}-card-name` }>
            { drink.strDrink }
          </span>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default Bebidas;
