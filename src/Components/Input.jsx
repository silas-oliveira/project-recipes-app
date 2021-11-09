import React from 'react';

function Input(props) {
  const { type } = props;
  return (
    <input type={ type } />
  );
}

export default Input;
