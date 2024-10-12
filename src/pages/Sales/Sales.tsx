import React from 'react';
import GradientTitle from '../../ui-kit/GradientTitle/GradientTitle';
import './Sales.css';
import photoSale1 from '../../assets/bse 125/bse125.jpg';
import photoSale2 from '../../assets/bse 125/bse125(2).jpg';
import photoSale3 from '../../assets/bse110/bse110.jpg';
import Slider from '../../components/Slider/Slider';

const sliderData = [
  { title: 'Прокат с другом', description: 'Приведи друга и получи скидку 5%', img: photoSale1 },
  {
    title: 'Для шумных компаний',
    description: 'Скидка на катание для 4 и более человек 7%',
    img: photoSale2,
  },
  { title: 'Скидка именинникам', description: 'Скидки в честь Дня Рождения 7%', img: photoSale3 },
];

const Sales: React.FC = () => {
  return (
    <article>
      <div className="container">
        <div className="sales">
          <h1 className="sales__title">
            <GradientTitle title="У нас выгодно!" />
          </h1>
          <h2 className="sales__description">
            Мы ценим доверие наших клиентов, поэтому у нас есть для вас выгодные преодоления{' '}
          </h2>

          <div className="sales__slider">
            <Slider data={sliderData} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Sales;
