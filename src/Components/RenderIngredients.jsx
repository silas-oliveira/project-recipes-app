import React from 'react';
import PropTypes from 'prop-types';

const MAX_INGREDIENTS = 12;

function RenderIngredients(props) {
  const { ingredients, local } = props;

  return (
    <div>
      {ingredients.slice(0, MAX_INGREDIENTS).map((ingredient, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-card` }>
          <span data-testid={ `${index}-card-name` }>
            {ingredient.strIngredient1}
          </span>
          <img
            src={ `${local === 'bebidas'
              ? 'https://www.thecocktaildb.com' : 'https://www.themealdb.com'}/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            alt={ ingredient.strIngredient1 }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
    </div>
  );
}

RenderIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    strIngredient1: PropTypes.string,
    local: PropTypes.string,
  })).isRequired,
};

export default RenderIngredients;
