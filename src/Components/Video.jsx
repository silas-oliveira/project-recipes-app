import React from 'react';
import PropTypes from 'prop-types';

function Video({ url }) {
  return (
    <video controls src={ url }>
      <track
        default
        kind="captions"
        srcLang="en"
      />
    </video>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
