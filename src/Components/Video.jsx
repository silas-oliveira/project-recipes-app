import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

function Video({ url }) {
  return (
    <div
      className="d-flex justify-content-center mt-3 player-wrapper"
      data-testid="video"
    >
      <ReactPlayer
        width="100%"
        height="100%"
        className="react-player"
        url={ url }
        controls
      />
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
