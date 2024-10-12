import React from 'react';
import './PriceSale.css';

interface IPriceSale {
  prices: string[];
}

const PriceSale: React.FC<IPriceSale> = ({ prices }) => {
  return (
    <div className="price-sale">
      {prices.map((price) => (
        <p>{price}</p>
      ))}
    </div>
  );
};
export default PriceSale;
