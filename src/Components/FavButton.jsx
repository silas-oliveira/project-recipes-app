import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFavoriteRecipe, updateFavorite } from '../localStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavButton(props) {
  const { recipe } = props;
  const [favorited, setFavorited] = useState(isFavoriteRecipe(recipe.id));

  function favButton() {
    updateFavorite(recipe);
    setFavorited(isFavoriteRecipe(recipe.id));
  }

  return (
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
};

export default FavButton;
