import React from 'react';
import PropTypes from 'prop-types';
import { isDoneRecipe, isInProgressRecipes } from '../localStorage';

function RenderStartButton(props) {
  const { onClick, id, type, withDataTestId } = props;
  return (
    <button
      type="button"
      data-testid={ withDataTestId ? 'start-recipe-btn' : '' }
      className="startRecipeButton btn btn-primary btn-all-width rounded-0 fs-3"
      style={ isDoneRecipe(id) && withDataTestId ? { display: 'none' } : {} }
      onClick={ onClick }
    >
      {isInProgressRecipes(id, type) ? 'Continuar Receita' : 'Iniciar Receita'}
    </button>
  );
}

RenderStartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  withDataTestId: PropTypes.bool,
};

RenderStartButton.defaultProps = {
  withDataTestId: false,
};

export default RenderStartButton;
