import React from 'react';
import PropTypes from 'prop-types';

function RenderFilterBtn(props) {
  const { attribute } = props;
  let type = attribute.toLowerCase();
  if (attribute === 'Drinks') {
    type = attribute.substring(0, attribute.length - 1).toLowerCase();
  }
  return (
    <button
      type="button"
      data-testid={ `filter-by-${type}-btn` }
    >
      {attribute}
    </button>
  );
}

RenderFilterBtn.propTypes = {
  attribute: PropTypes.string.isRequired,
};

export default RenderFilterBtn;
