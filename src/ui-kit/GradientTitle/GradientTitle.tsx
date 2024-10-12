import React from 'react';
import './GradientTitle.css';

interface IGradientTitleProps {
  title: string;
}

const GradientTitle: React.FC<IGradientTitleProps> = ({ title }) => {
  return <div className="gradientTitle">{title}</div>;
};

export default GradientTitle;
