import React from 'react';
import { BeatLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return <BeatLoader speedMultiplier={0.8} className="spinner" color={'white'} loading={true} size={7} />;
};

export default LoadingSpinner;