import React from 'react';
import './CheckBox.css';
import Description from '../../ui-kit/Description/Description';

interface ICheckBoxProps {
  CheckBox: {
    img: string;
    description: string;
  };
}
const CheckBox: React.FC<ICheckBoxProps> = ({ CheckBox }) => {
  return (
    <div className="request-rent__checkbox">
      <label>
        <input className="real-checkbox" type="checkbox" id="motorcycles" name="motorcycles" />
        <span className="custom-checkbox"></span>
        Мотоцикл
      </label>
      <label>
        <input className="real-checkbox" type="checkbox" id="atvs" name="atvs" />
        <span className="custom-checkbox"></span>
        Квадроцикл
      </label>
      <label>
        <input className="real-checkbox" type="checkbox" id="snowmobile" name="snowmobile" />
        <span className="custom-checkbox"></span>
        Снегоход
      </label>
    </div>
  );
};

export default CheckBox;
