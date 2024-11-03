import React, { useState } from 'react';
import IconButton from '../../ui-kit/IconButton/IconButton';
import './TechincSlider.css';

interface ITechnicSliderProps {
  data: string[];
}

const TechnicSlider: React.FC<ITechnicSliderProps> = ({ data }) => {
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
    <div className="technicSlider">
      <div className="technicSlider__actions">
        <IconButton direction="left" onClick={prev} disable={activeId === 0} />
        <IconButton direction="right" onClick={next} disable={activeId === data.length - 1} />
      </div>
      <div className="technicSliderList">
        {data.map((item, id) => (
          <div key={id} className={`${activeId === id ? 'technicSlide active' : 'technicSlide'}`}>
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicSlider;
