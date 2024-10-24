// components/ui/card.tsx
import React from 'react';
import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={classNames('bg-white shadow-md rounded-lg', className)}>
      {children}
    </div>
  );
};

export { Card };
