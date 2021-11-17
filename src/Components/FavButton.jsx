import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFavoriteRecipe, updateFavorite } from '../localStorage';
import blackHeartIcon from '../images/blackHeartIcon.png';
import whiteHeartIcon from '../images/whiteHeartIcon.png';

function FavButton(props) {
  const { recipe, onClick, dataTestId } = props;
  const [favorited, setFavorited] = useState(isFavoriteRecipe(recipe.id));

  function favButton() {
    updateFavorite(recipe);
    setFavorited(isFavoriteRecipe(recipe.id));
    onClick();
  }

  return (
    <button
      type="button"
      data-testid={ dataTestId }
      src={ favorited ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => favButton() }
      className="remove-button-default-style ms-3"
    >
      <img
        src={ favorited ? blackHeartIcon : whiteHeartIcon }
        alt="Botão favoritar"
        width="40"
        height="40"
        className="img-png-border"
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
  dataTestId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

FavButton.defaultProps = {
  onClick: () => {},
};

export default FavButton;
