import React from 'react';
import PropTypes from 'prop-types';

function RenderFilterBtn(props) {
  const { attribute, handleClick } = props;
  let type = attribute.toLowerCase();
  if (attribute === 'Drinks') {
    type = attribute.substring(0, attribute.length - 1).toLowerCase();
  }
  return (
    <button
      type="button"
      data-testid={ `filter-by-${type}-btn` }
      onClick={ () => handleClick(attribute) }
    >
      {attribute}
    </button>
  );
}

RenderFilterBtn.propTypes = {
  attribute: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RenderFilterBtn;
