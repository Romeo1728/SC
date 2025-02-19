import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | JSX.Element;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void; 
}
