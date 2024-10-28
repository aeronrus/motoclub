import React from 'react';
import './About.css';
import AboutList from '../../modules/AboutList/AboutList';
import Title from '../../ui-kit/Title/Title';
import Description from '../../ui-kit/Description/Description';

const About: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="about">
          <Title title="Почему мы лучшие?" />
          <AboutList />
          <Description
            description="Скорее всего, прежде чем попасть на наш сайт, вы посмотрели уже более 10 разных прокатов
            эндуро, но вы будете приятно удивлены нашими ценами. Экономим ли мы на качестве?
            Никогда! Вот и вы не экономьте на своих эмоциях Не стоит откладывать на завтра то, что
            ты можешь проехать уже сегодня!"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
