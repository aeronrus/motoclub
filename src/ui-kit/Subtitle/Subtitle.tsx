import React from 'react';
import './Subtitle.css';

interface ISubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<ISubtitleProps> = ({ subtitle }) => {
  return <h2 className="subtitle">{subtitle}</h2>;
};

export default Subtitle;
