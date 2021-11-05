import React from 'react';
import PropType from 'prop-types';

function Input(props) {
  const { type, nome, dataTestid } = props;

  const handleChange = ({ target: { name, value } }) => {
    // setLogin({
    //   [name]: value,
    // });
  };

  return (
    <label htmlFor={ nome }>
      <input
        type={ type }
        name={ nome }
        value={ nome }
        id={ nome }
        data-testid={ dataTestid }
        onChange={ handleChange }
      />
    </label>
  );
}

Input.propTypes = {
  nome: PropType.string.isRequired,
  type: PropType.string.isRequired,
  dataTestid: PropType.string.isRequired,
};

export default Input;
