import React from 'react';
import './Description.css';

interface IDescriptionProps {
  description: string;
}
const Description: React.FC<IDescriptionProps> = ({ description }) => {
  return <p className="description">{description}</p>;
};

export default Description;
