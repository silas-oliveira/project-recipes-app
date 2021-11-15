import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFavoriteRecipe, updateFavorite } from '../localStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavButton(props) {
  const { recipe, index, onClick } = props;
  const [favorited, setFavorited] = useState(isFavoriteRecipe(recipe.id));

  function favButton() {
    updateFavorite(recipe);
    setFavorited(isFavoriteRecipe(recipe.id));
    onClick();
  }

  return (
    <button
      type="button"
      data-testid={ !Number.isNaN(index)
        ? `${index}-horizontal-favorite-btn` : 'favorite-btn' }
      src={ favorited ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => favButton() }
    >
      <img
        src={ favorited ? blackHeartIcon : whiteHeartIcon }
        alt="Botão favoritar"
      />
    </button>
  );
}

FavButton.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func,
};

FavButton.defaultProps = {
  index: null,
  onClick: () => {},
};

export default FavButton;
