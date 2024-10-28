import React from 'react';
import './Title.css';

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};

export default Title;
