import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CheckboxIngredients(props) {
  const { ingredient, index, checked: checkedProps } = props;

  const [checked, setChecked] = useState(checkedProps);

  const handleChangeComponent = () => {
    const { handleChange } = props;
    setChecked(handleChange());
  };

  return (
    <li className="ms-4">
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
    </li>
  );
}

CheckboxIngredients.propTypes = {
  ingredient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CheckboxIngredients;
