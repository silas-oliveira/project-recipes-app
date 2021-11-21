import React, { useContext } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';
import { searchApi } from '../services/requestApi';

const MAX_INGREDIENTS = 12;

function RenderIngredients(props) {
  const { setMeals, setDrinks } = useContext(ContextAppReceita);

  const history = useHistory();

  const { ingredients, local } = props;

  async function onClick(ingredient) {
    const curLocal = local === 'bebidas' ? 'Bebidas' : 'Comidas';
    const response = await searchApi('Ingrediente', ingredient, curLocal);
    if (local === 'bebidas') {
      setDrinks(response);
    } else setMeals(response);
    history.push(`/${local}`);
  }

  return (
    <div className="row my-3">
      {ingredients.slice(0, MAX_INGREDIENTS).map((ingredient, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          onClick={ () => onClick(ingredient.strIngredient1) }
          className={ `col-6 col-sm-4 col-md-3 col-xl-2 p-2 remove-button-default-style
          min-card-height` }
        >
          <FadeIn>
            <div className="shadow-custom border-card-custom">
              <img
                src={ `${local === 'bebidas'
                  ? 'https://www.thecocktaildb.com' : 'https://www.themealdb.com'}/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                alt={ ingredient.strIngredient1 }
                data-testid={ `${index}-card-img` }
                className="mt-3"
              />
              <p
                data-testid={ `${index}-card-name` }
                className={ `fw-bold mx-2 my-3 fs-6 category-fav
                  font-monospace overflow-auto` }
              >
                {ingredient.strIngredient1}
              </p>
            </div>
          </FadeIn>
        </button>
      ))}
    </div>
  );
}

RenderIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    strIngredient1: PropTypes.string,
  })).isRequired,
  local: PropTypes.string.isRequired,
};

export default RenderIngredients;
