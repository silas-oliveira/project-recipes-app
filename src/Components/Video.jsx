import React from 'react';
import PropTypes from 'prop-types';

function Video({ url }) {
  return (
    <div className="d-flex justify-content-center mt-3">
      <video controls src={ url } className="image-container">
        <track
          default
          kind="captions"
          srcLang="en"
        />
      </video>
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
