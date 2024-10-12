import React from 'react';
import './ScrollingBackground.css';

const ScrollingBackground: React.FC = () => {
  return (
    <div className="scrolling-background">
      <div className="scrolling-background__background">
        <div className="scrolling-background__background--black"></div>
      </div>
      <div className="scrolling-background__content">
        <h1>Окунитесь в мир внедорожной езды с нами</h1>
      </div>
    </div>
  );
};
export default ScrollingBackground;
