import React from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function RenderMultiplesShare(props) {
  const { onClick, id, index, type, copied, replace } = props;

  const shareLink = () => {
    const standartLink = window.location.href;
    const generalType = `${type}s/${id}`;
    window.navigator.clipboard.writeText(
      standartLink.replace(replace, generalType),
    )
      .catch((err) => console.error('Error:', err));
    onClick();
  };

  return (
    <>
      <button
        type="button"
        onClick={ () => shareLink() }
        className="remove-button-default-style button-absolute"
      >
        <img
          src={ shareIcon }
          data-testid={ `${index}-horizontal-share-btn` }
          alt="share"
        />
      </button>
      {copied && (
        <span
          className="fs-6 text-color-custom fw-bold font-monospace link-copied-list"
        >
          Link copiado!
        </span>)}
    </>
  );
}

RenderMultiplesShare.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired,
  replace: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RenderMultiplesShare;
