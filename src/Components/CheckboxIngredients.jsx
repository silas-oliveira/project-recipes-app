import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CheckboxIngredients(props) {
  const [checked, setChecked] = useState(false);

  const handleChangeComponent = () => {
    const { handleChange, ingredient } = props;
    handleChange(!checked, ingredient);
    setChecked(!checked);
  };

  const { ingredient, index } = props;

  return (
    <label
      htmlFor={ ingredient }
      data-testid={ `${index}-ingredient-step` }
      className={ checked ? 'checked' : '' }
    >
      {ingredient}
      <input
        value={ ingredient }
        type="checkbox"
        id={ ingredient }
        checked={ checked }
        onChange={ handleChangeComponent }
      />
    </label>
  );
}

CheckboxIngredients.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckboxIngredients;
