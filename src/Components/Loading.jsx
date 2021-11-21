import React from 'react';
import Lottie from 'react-lottie';
import loadingLotie from '../lotties/loading.json';

function Loading() {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLotie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="row justify-content-center">
      <div className="col-8 col-md-5 col-lg-2">
        <Lottie options={ loadingOptions } width={ 250 } height={ 250 } />
      </div>
    </div>
  );
}

export default Loading;
