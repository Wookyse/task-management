import React from 'react';
import './Button.css';

type ButtonProps = {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  children: string;
  classsName?: string;
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};
