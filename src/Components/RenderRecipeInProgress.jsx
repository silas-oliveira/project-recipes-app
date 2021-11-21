import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FavButton from './FavButton';
import CopyButton from './CopyButton';
import Video from './Video';
import {
  doneRecipe,
  setInProgressRecipe,
  getRecipeInProgress,
  removeRecipeInProgress,
} from '../localStorage';
import CheckboxIngredients from './CheckboxIngredients';
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
    video,
    alcoholic,
  } = props;

  const [checkedIngre, setCheckedIngre] = useState(getRecipeInProgress(id, type));

  const history = useHistory();

  const handleFinishRecipe = () => {
    const doneDate = new Date().toLocaleDateString('pt-BR');
    const finishedRecipe = {
      ...chosenRecipe,
      doneDate,
    };
    doneRecipe(finishedRecipe);
    removeRecipeInProgress(id, type);
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

  const curRecipe = () => {
    const newRecipe = { ...chosenRecipe };
    delete newRecipe.tags;
    console.log(newRecipe)
    return newRecipe;
  };

  function renderShareLikeButton() {
    return (
      <>
        <FavButton recipe={ curRecipe() } dataTestId="favorite-btn" />
        <CopyButton link={ window.location.href.replace('/in-progress', '') } />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="image-container position-relative mt-3">
            <img
              src={ image }
              alt="Recipe"
              data-testid="recipe-photo"
              className="img-card border border-secondary"
            />
            <h1
              data-testid="recipe-title"
              className="recipe-name-details text-white mb-0"
            >
              { title }
            </h1>
            <p
              data-testid="recipe-category"
              className="recipe-category-details mb-0 text-white"
            >
              {alcoholic === 'Alcoholic' ? `${alcoholic}! ${category}` : category}
            </p>
            <div className="fav-share-button-details">
              {renderShareLikeButton()}
            </div>
          </div>
        </div>
        <div className="my-4">
          <h4>Ingredientes</h4>
          <ul className="p-3 bg-gray-500 rounded-3">
            {ingredients && ingredients.map((ingredient, index) => (
              <CheckboxIngredients
                key={ index }
                ingredient={ ingredient }
                index={ index }
                handleChange={ () => handleCheckbox(ingredient) }
                checked={ checkedIngre.includes(ingredient) }
              />
            ))}
          </ul>
        </div>
        <div className="my-4">
          <h4>Instrução</h4>
          <p
            data-testid="instructions"
            className="p-3 bg-gray-500 rounded-3"
          >
            {instructions}
          </p>
        </div>
        {video && (
          <div className="my-4">
            <h4 data-testid="video">Video</h4>
            <Video url={ video } />
          </div>
        )}
      </div>
      <div>
        <button
          type="button"
          data-testid="finish-recipe-btn"
          className={ `${ingredients.length !== checkedIngre.length
            ? 'btn-secondary' : 'btn-primary'}
            startRecipeButton btn btn-all-width rounded-0 fs-3 opacity-100` }
          disabled={ ingredients.length !== checkedIngre.length }
          onClick={ handleFinishRecipe }
        >
          Finalizar Receita
        </button>
      </div>
    </>
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
  video: PropTypes.string,
  alcoholic: PropTypes.string,
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

RenderRecipeInProgress.defaultProps = {
  video: null,
  alcoholic: null,
};

export default RenderRecipeInProgress;
