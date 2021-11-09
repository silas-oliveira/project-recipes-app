import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import '../CSS/recommendations.css';

const MAX_RECOMENDATIONS = 6;

function RenderRecipeDetails(props) {
  const {
    image,
    title,
    video,
    ingredients,
    category,
    instructions,
    recommendations,
  } = props;
  return (
    <div>
      <div>
        <img src={ image } alt="Recipe" data-testid="recipe-photo" />
      </div>
      <div>
        <h1 data-testid="recipe-title">{title}</h1>
        <button type="button" data-testid="share-btn">compartilhar</button>
        <button type="button" data-testid="favorite-btn">favoritar</button>
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
      <div>
        Recomendacao
        <div className="recommendations-ul">
          { recommendations.slice(0, MAX_RECOMENDATIONS).map((recommendation, index) => (
            <div
              className="recommendations-li"
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <span data-testid={ `${index}-recomendation-title` }>
                {recommendation.strMeal || recommendation.strDrink}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
      </div>
    </div>
  );
}

RenderRecipeDetails.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

RenderRecipeDetails.defaultProps = {
  video: '',
};

export default RenderRecipeDetails;
