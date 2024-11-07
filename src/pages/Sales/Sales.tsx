import React from 'react';
import GradientTitle from '../../ui-kit/GradientTitle/GradientTitle';
import './Sales.css';
import friend from '../../assets/helpers/sales/friend4.jpg';
import family from '../../assets/helpers/sales/family.jpg';
import company from '../../assets/helpers/sales/company2.jpg';
import birthday from '../../assets/helpers/sales/HB.jpg';

import Slider from '../../components/Slider/Slider';
import Subtitle from '../../ui-kit/Subtitle/Subtitle';

const sliderData = [
  { title: 'Прокат с другом', description: 'Приведи друга и получи скидку 5%', img: friend },
  {
    title: 'Для шумных компаний',
    description: 'Скидка на катание 4+ человек 7%',
    img: company,
  },
  { title: 'Скидка именинникам', description: 'Скидки в честь Дня Рождения 7%', img: birthday },
  {
    title: 'Многодетным семьям',
    description: 'Скидка многодетным семьям 5%',
    img: family,
  },
];

const Sales: React.FC = () => {
  return (
    <article>
      <div className="container">
        <div className="sales">
          <h1 className="sales__title">
            <GradientTitle title="У нас выгодно!" />
          </h1>
          <div className="sales__description">
            <Subtitle subtitle="Мы ценим доверие наших клиентов, поэтому у нас есть для вас выгодные преодоления" />
          </div>

          <div className="sales__slider">
            <Slider data={sliderData} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Sales;
