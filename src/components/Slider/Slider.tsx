import React, { useState } from 'react';
import './Slider.css';
import IconButton from '../../ui-kit/IconButton/IconButton';

interface ISliderProps {
  data: {
    title: string;
    description: string;
    img: string;
  }[];
}

const Slider: React.FC<ISliderProps> = ({ data }) => {
  const [activeId, setActiveId] = useState(0);

  const prev = (): void => {
    setActiveId((activeId) => {
      if (activeId > 0) {
        return activeId - 1;
      }
      return activeId;
    });
  };

  const next = (): void => {
    setActiveId((activeId) => {
      if (activeId < data.length) {
        return activeId + 1;
      }
      return activeId;
    });
  };

  return (
    <div className="container">
      <div className="slider__actions">
        <IconButton direction="left" onClick={prev} disable={activeId === 0} />
        <IconButton direction="right" onClick={next} disable={activeId === data.length - 1} />
      </div>
      <div className="slider">
        {data.map((slide, id) => (
          <div key={id} className={`slide${id === activeId ? ' active' : ''}`}>
            <div className="slide__info">
              <div className="slide__title">{slide.title}</div>
              <div className="slide__description">{slide.description}</div>
            </div>
            <img src={slide.img} alt="slide.title" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
