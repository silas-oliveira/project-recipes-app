import React from 'react';
import PropType from 'prop-types';

function Button(props) {
  const { onClick, dataTestid, isDisabled, label } = props;

  return (
    <button
      type="button"
      onClick={ onClick }
      disabled={ isDisabled }
      data-testid={ dataTestid }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  label: PropType.string.isRequired,
  dataTestid: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
  isDisabled: PropType.bool.isRequired,
};

export default Button;
