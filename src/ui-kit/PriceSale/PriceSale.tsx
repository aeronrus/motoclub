import React from 'react';
import './PriceSale.css';

interface IPriceSale {
  prices: string[];
}

const PriceSale: React.FC<IPriceSale> = ({ prices }) => {
  return (
    <div className="price-sale">
      {prices.map((price, index) => (
        <p key={index}>{price}</p> //Массив с ценами не меняется по своей длине(всегда 2 цены),поэтому оставляем в key index, чтобы не выдумывать id
      ))}
    </div>
  );
};
export default PriceSale;
