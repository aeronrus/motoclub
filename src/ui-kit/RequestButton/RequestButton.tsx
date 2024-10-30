import React from 'react';
import './RequestButton.css';

interface IRequestButtonProps {
  title: string;
  onClick?: () => void;
}

const RequestButton: React.FC<IRequestButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <button className="request-btn" onClick={onClick}>
        {title}
        <span className="request-btn__inner">
          <span className="request-btn__blob"></span>
          <span className="request-btn__blob"></span>
          <span className="request-btn__blob"></span>
          <span className="request-btn__blob"></span>
        </span>
      </button>
      <br />
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default RequestButton;
