import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FavButton from './FavButton';
import { doneRecipe, setInProgressRecipe, getRecipeInProgress } from '../localStorage';
import CheckboxIngredients from './CheckboxIngredients';
import shareIcon from '../images/exploreIcon.svg';
import '../CSS/recipeInProgress.css';

function RenderRecipeInProgress(props) {
  const {
    id,
    title,
    ingredients,
    instructions,
    image,
    category,
    chosenRecipe,
    type,
  } = props;

  const [checkedIngre, setCheckedIngre] = useState(getRecipeInProgress(id, type));
  const [copia, setCopia] = useState(false);

  const history = useHistory();

  const handleFinishRecipe = () => {
    const doneDate = new Date().toLocaleDateString('pt-BR');
    const finishedRecipe = {
      ...chosenRecipe,
      doneDate,
    };
    doneRecipe(finishedRecipe);
    history.push('/receitas-feitas');
  };

  const handleCheckbox = (ingredient) => {
    if (checkedIngre.includes(ingredient)) {
      const newCheckedIngre = checkedIngre.filter(
        (curIngredient) => curIngredient !== ingredient,
      );
      setCheckedIngre(newCheckedIngre);
      setInProgressRecipe(id, newCheckedIngre, type);
      return false;
    }
    const newCheckedIngre = [...checkedIngre, ingredient];
    setCheckedIngre(newCheckedIngre);
    setInProgressRecipe(id, newCheckedIngre, type);
    return true;
  };

  const clickCompartilhar = () => {
    window.navigator.clipboard.writeText(window.location.href.replace('/in-progress', ''))
      .catch((err) => console.error('Error:', err));
    setCopia(true);
  };

  const curRecipe = () => {
    const newRecipe = { ...chosenRecipe };
    delete newRecipe.tags;
    return newRecipe;
  };

  return (
    <div>
      <div>
        <img src={ image } alt="Recipe" data-testid="recipe-photo" />
        <div>
          <h2 data-testid="recipe-title">{title}</h2>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ clickCompartilhar }
          >
            <img src={ shareIcon } alt="compartilhar" />
            {copia && 'Link copiado!'}
          </button>
          <FavButton recipe={ curRecipe() } />
        </div>
        <div>
          <p data-testid="recipe-category">{category}</p>
          <div>
            {ingredients && ingredients.map((ingredient, index) => (
              <CheckboxIngredients
                key={ index }
                ingredient={ ingredient }
                index={ index }
                handleChange={ () => handleCheckbox(ingredient) }
                checked={ checkedIngre.includes(ingredient) }
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
          onClick={ handleFinishRecipe }
        >
          Finalizar Receita
        </button>
      </div>
    </div>
  );
}

RenderRecipeInProgress.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  chosenRecipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RenderRecipeInProgress;
