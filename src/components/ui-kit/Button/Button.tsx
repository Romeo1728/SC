import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './ButtonProps';

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={`${styles.buttonReport} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
