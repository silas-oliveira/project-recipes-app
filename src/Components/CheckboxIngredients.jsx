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
    <li className="list-style-none">
      <div className="form-check">
        <label
          className={ `${checked ? 'checked' : ''} form-check-label` }
          htmlFor={ ingredient }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            className="form-check-input"
            value={ ingredient }
            type="checkbox"
            id={ ingredient }
            checked={ checked }
            onChange={ handleChangeComponent }
          />
          {ingredient}
        </label>
      </div>
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
