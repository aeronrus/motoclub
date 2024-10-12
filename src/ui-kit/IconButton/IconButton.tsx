import React from 'react';
import './IconButton.css';

interface IIconButtonProps {
  direction: string;
  onClick: () => void;
  disable: boolean;
}

const IconButton: React.FC<IIconButtonProps> = ({ direction, onClick, disable }) => {
  let cls = 'iconButton';
  if (direction === 'left') {
    cls += ' left';
  }
  if (direction === 'right') {
    cls += ' right';
  }

  if (disable) {
    cls += ' disable';
  }

  return <div className={cls} onClick={onClick}></div>;
};
export default IconButton;
