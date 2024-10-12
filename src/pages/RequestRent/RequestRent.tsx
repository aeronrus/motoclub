import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import './RequestRent.css';

import React from 'react';

const RequestRent = () => {
  return (
    <article>
      <div className="container">
        <div className="request-rent">
          <h1 className="request-rent__title">Заявка на прокат</h1>
          <div className="request-rent__description">
            <p>Не откладывай эмоции на завтра!</p>
            <p>Бронируй заранее</p>
          </div>
          <form className="request-rent__form">
            <p>Заполните форму</p>
            <div className="request-rent__item">
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="request-rent__item">
              <label htmlFor="email">Ваш номер телефона:</label>
              <input type="tel" id="tel" name="tel" required />
            </div>

            <div className="request-rent__item">
              <label htmlFor="technic">На какой технике хотите покататься?</label>
              <div className="request-rent__checkbox">
                <label>
                  <input
                    className="real-checkbox"
                    type="checkbox"
                    id="motorcycles"
                    name="motorcycles"
                  />
                  <span className="custom-checkbox"></span>
                  Мотоцикл
                </label>
                <label>
                  <input className="real-checkbox" type="checkbox" id="atvs" name="atvs" />
                  <span className="custom-checkbox"></span>
                  Квадроцикл
                </label>
                <label>
                  {' '}
                  <input
                    className="real-checkbox"
                    type="checkbox"
                    id="snowmobile"
                    name="snowmobile"
                  />
                  <span className="custom-checkbox"></span>
                  Снегоход
                </label>
              </div>
            </div>
            <div className="request-rent__item">
              <label htmlFor="name">Количество техники(шт):</label>
              <input type="number" id="quantity" name="quantity" value="1" />
            </div>

            <div className="request-rent__item">
              <label htmlFor="message">Пожелания(необязательно):</label>
              <textarea id="message" name="message"></textarea>
            </div>

            <RequestButton title="отправить" />
          </form>
        </div>
      </div>
    </article>
  );
};

export default RequestRent;
