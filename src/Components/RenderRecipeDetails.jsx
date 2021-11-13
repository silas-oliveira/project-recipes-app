import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useHistory, Link } from 'react-router-dom';
import Video from './Video';
import {
  isDoneRecipe,
  isInProgressRecipes,
  isFavoriteRecipe,
  updateFavorite } from '../localStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../CSS/renderRecipeDetails.css';
import shareIcon from '../images/exploreIcon.svg';

const MAX_RECOMENDATIONS = 6;

function RenderRecipeDetails(props) {
  const {
    id,
    image,
    title,
    video,
    ingredients,
    category,
    instructions,
    recommendations,
    type,
    area,
  } = props;

  const [favorited, setFavorited] = useState(false);
  const [copia, setCopia] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setFavorited(isFavoriteRecipe(id));
  }, [id]);

  const clickCompartilhar = () => {
    copy(window.location.href);
    setCopia(true);
  };

  function favButton() {
    const curFav = {
      id,
      type: type === 'bebidas' ? 'bebida' : 'comida',
      area,
      category,
      image,
      name: title,
    };
    updateFavorite(curFav);
    setFavorited(isFavoriteRecipe(id));
  }

  return (
    <div>
      <div>
        <img src={ image } alt="Recipe" data-testid="recipe-photo" />
      </div>
      <div>
        <h1 data-testid="recipe-title">{title}</h1>
        <button
          type="button"
          data-testid="favorite-btn"
          src={ favorited ? blackHeartIcon : whiteHeartIcon }
          onClick={ () => favButton() }
        >
          <img
            src={ favorited ? blackHeartIcon : whiteHeartIcon }
            alt="Botão favoritar"
          />
        </button>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ clickCompartilhar }
        >
          <img src={ shareIcon } alt="compartilhar" />
          { copia && 'Link copiado!' }
        </button>
        <p data-testid="recipe-category">{category}</p>
      </div>
      <div>
        <h4>Ingredientes</h4>
        <ul>
          { ingredients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Instrução</h4>
        <p data-testid="instructions">{instructions}</p>
      </div>
      { video && (
        <div>
          <h4 data-testid="video">video</h4>
          <Video url={ video } />
        </div>
      )}
      <div className="mb-4">
        Recomendacao
        <div className="recommendations-div">
          { recommendations.slice(0, MAX_RECOMENDATIONS).map((recommendation, index) => (
            <Link
              to={ `/${type === 'bebidas'
                ? 'comidas' : 'bebidas'}/${recommendation.idMeal
                  || recommendation.idDrink}` }
              className="recommendations-card"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <span data-testid={ `${index}-recomendation-title` }>
                {recommendation.strMeal || recommendation.strDrink}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startRecipeButton"
          style={ isDoneRecipe(id) ? { display: 'none' } : {} }
          onClick={ () => history.push(`/${type}/${id}/in-progress`) }
        >
          {isInProgressRecipes(id, type) ? 'Iniciar Receita' : 'Continuar Receita'}
        </button>
      </div>
    </div>
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
};

RenderRecipeDetails.defaultProps = {
  video: '',
  area: '',
};

export default RenderRecipeDetails;
