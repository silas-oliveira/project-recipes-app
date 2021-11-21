import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Video from './Video';
import CopyButton from './CopyButton';
import FavButton from './FavButton';
import RenderStartButton from './RenderStartButton';
import { isDoneRecipe } from '../localStorage';
import '../CSS/renderRecipeDetails.css';

const MAX_RECOMENDATIONS = 6;

function RenderRecipeDetails(props) {
  const {
    id,
    image,
    title,
    video,
    ingredients,
    category,
    alcoholic,
    instructions,
    recommendations,
    type,
    area,
  } = props;

  const history = useHistory();

  const curFav = {
    id,
    type: type === 'bebidas' ? 'bebida' : 'comida',
    area,
    category,
    image,
    name: title,
    alcoholicOrNot: alcoholic,
  };

  function onClick() {
    history.push(`/${type}/${id}/in-progress`);
  }

  function renderShareLikeButton() {
    return (
      <>
        <FavButton recipe={ curFav } dataTestId="favorite-btn" />
        <CopyButton link={ window.location.href } />
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
              {title}
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
            { ingredients.map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
                className="ms-4"
              >
                {ingredient}
              </li>
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
        { video && (
          <div className="my-4">
            <h4 data-testid="video">Video</h4>
            <Video url={ video } />
          </div>
        )}
        <div className="my-4">
          <h4>Recomendacao</h4>
          <div className="bg-gray-500 rounded-2 p-2">
            <div className="recommendations-div">
              {recommendations.slice(0, MAX_RECOMENDATIONS)
                .map((recommendation, index) => (
                  <Link
                    to={ `/${type === 'bebidas'
                      ? 'comidas' : 'bebidas'}/${recommendation.idMeal
                      || recommendation.idDrink}` }
                    className={ `${index === 0 ? 'ms-0' : ''}
                      ${index === MAX_RECOMENDATIONS - 1 ? 'me-0' : ''}
                      recommendations-card position-relative` }
                    key={ index }
                    data-testid={ `${index}-recomendation-card` }
                  >
                    <img
                      src={ recommendation.strMealThumb || recommendation.strDrinkThumb }
                      alt="Recomendation"
                      className="img-recommendation rounded-3"
                    />
                    <span
                      data-testid={ `${index}-recomendation-title` }
                      className="recipe-name-recommendation text-white h2"
                    >
                      {recommendation.strMeal || recommendation.strDrink}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <RenderStartButton
          onClick={ onClick }
          withDataTestId
          id={ id }
          type={ type }
        />
        {isDoneRecipe(id)
        && <RenderStartButton onClick={ onClick } id={ id } type={ type } />}
      </div>
    </>
  );
}

RenderRecipeDetails.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  type: PropTypes.string.isRequired,
  area: PropTypes.string,
  alcoholic: PropTypes.string,
};

RenderRecipeDetails.defaultProps = {
  video: '',
  area: '',
  alcoholic: '',
};

export default RenderRecipeDetails;
