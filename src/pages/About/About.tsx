import React from 'react';
import './About.css';
import AboutList from '../../modules/AboutList/AboutList';

const About: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="about">
          <h2>Почему мы лучше?</h2>
          <AboutList />
          <p className="about__description">
            Скорее всего, прежде чем попасть на наш сайт, вы посмотрели уже более 10 разных прокатов
            эндуро, но вы 100% будете приятно удивлены нашими ценами. Экономим ли мы на качестве?
            Никогда! Вот и вы не экономьте на своих эмоциях Не стоит откладывать на завтра то, что
            ты можешь проехать уже сегодня!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
