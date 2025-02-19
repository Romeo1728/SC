import React from 'react';
import { IconProps } from './types';


const Icon: React.FC<IconProps> = ({ id, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className} aria-label={id} aria-hidden="true" >
      <use xlinkHref={`/icons/sprite1.svg#${id}`} />
    </svg>
  );
};

export default Icon;