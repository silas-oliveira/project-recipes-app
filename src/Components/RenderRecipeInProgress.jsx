import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckboxIngredients from './CheckboxIngredients';
import '../CSS/recipeInProgress.css';

function RenderRecipeInProgress(props) {
  const {
    title,
    ingredients,
    instructions,
    image,
    category,
  } = props;

  const [checkedIngre, setCheckedIngre] = useState([]);

  return (
    <div>
      <div>
        <img src={ image } alt="Recipe" data-testid="recipe-photo" />
        <div>
          <h2 data-testid="recipe-title">{title}</h2>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
        </div>
        <div>
          <p data-testid="recipe-category">{category}</p>
          <div>
            {ingredients && ingredients.map((ingredient, index) => (
              <CheckboxIngredients
                key={ index }
                ingredient={ ingredient }
                index={ index }
                handleChange={ () => setCheckedIngre([...checkedIngre, ingredient]) }
              />
            ))}
          </div>
        </div>
        <div>
          <p data-testid="instructions">{instructions}</p>
        </div>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ ingredients.length !== checkedIngre.length }
        >
          Finalizar Receita
        </button>
      </div>
    </div>
  );
}

RenderRecipeInProgress.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default RenderRecipeInProgress;
