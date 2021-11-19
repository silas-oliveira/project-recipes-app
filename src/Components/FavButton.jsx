import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isFavoriteRecipe, updateFavorite } from '../localStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavButton(props) {
  const { recipe, onClick, dataTestId, className, classNameImg } = props;
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
      className={ className || 'remove-button-default-style ms-3' }
    >
      <img
        src={ favorited ? blackHeartIcon : whiteHeartIcon }
        alt="Botão favoritar"
        width="40"
        height="40"
        className={ classNameImg || 'img-png-border' }
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
  className: PropTypes.string,
  classNameImg: PropTypes.string,
};

FavButton.defaultProps = {
  onClick: () => {},
  className: null,
  classNameImg: null,
};

export default FavButton;
