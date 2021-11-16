import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/exploreIcon.svg';

function CopyButton(props) {
  const [copy, setCopy] = useState(false);

  const { link, onClick } = props;

  const onCopy = () => {
    window.navigator.clipboard.writeText(link)
      .catch((err) => console.error('Error:', err));
    onClick();
    setCopy(true);
  };

  return (
    <button
      type="button"
      data-testid="share-btn"
      onClick={ onCopy }
    >
      <img src={ shareIcon } alt="compartilhar" />
      {copy && 'Link copiado!'}
    </button>
  );
}

CopyButton.propTypes = {
  link: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CopyButton.defaultProps = {
  onClick: () => {},
};

export default CopyButton;
