import React from 'react';
import Header from '../../components/Header/Header';
import About from '../About/About';
import Achievements from '../Achievements/Achievements';
import ScrollingBackground from '../../components/ScrollingBackground/ScrollingBackground';
import Contacts from '../Contacts/Contacts';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Achievements />
        <ScrollingBackground />
      </main>
      <footer>
        <Contacts />
      </footer>
    </>
  );
};

export default Home;
