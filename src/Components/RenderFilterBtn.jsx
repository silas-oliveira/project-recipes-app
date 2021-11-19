import React from 'react';
import PropTypes from 'prop-types';

function RenderFilterBtn(props) {
  const { attribute, handleClick, disabled } = props;
  let type = attribute.toLowerCase();
  if (attribute === 'Drinks') {
    type = attribute.substring(0, attribute.length - 1).toLowerCase();
  }
  return (
    <div className="px-1 col">
      <button
        type="button"
        data-testid={ `filter-by-${type}-btn` }
        className={ `${disabled ? 'btn-secondary' : 'btn-primary'}
        btn opacity-100 btn-all-width` }
        onClick={ () => handleClick(attribute) }
        disabled={ disabled }
      >
        {attribute}
      </button>
    </div>
  );
}

RenderFilterBtn.propTypes = {
  attribute: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

RenderFilterBtn.defaultProps = {
  disabled: false,
};

export default RenderFilterBtn;
