import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Contacts from '../../pages/Contacts/Contacts';
import Services from '../../pages/Services/Services';
import { Technics } from '../../pages/Technics/Technics';
import RequestRent from '../../pages/RequestRent/RequestRent';
import Sales from '../../pages/Sales/Sales';
import MainLayout from '../../components/Layouts/MainLayout';

test('navigates to app pages by clicking on the NavLink', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/technics" element={<Technics />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request-rent" element={<RequestRent />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

  const technics = screen.getByText('Техника');
  const services = screen.getByText('Услуги');
  const requestRent = screen.getByText('Записаться');
  const contacts = screen.getByText('Контакты');

  fireEvent.click(contacts);

  expect(screen.getByText('Контактная информация')).toBeInTheDocument();
  expect(screen.getByText('Мы находимся здесь:')).toBeInTheDocument();
  expect(screen.getByText('+7 911 196-15-20')).toBeInTheDocument();
  expect(screen.getByText('+7 911 659-76-74')).toBeInTheDocument();

  fireEvent.click(requestRent);
  expect(screen.getByText('Заполните форму')).toBeInTheDocument();
  expect(screen.getByText('Бронируй заранее')).toBeInTheDocument();
  expect(screen.getByTestId('form')).toBeInTheDocument();

  fireEvent.click(technics);
  expect(screen.getByText('Выбор техники')).toBeInTheDocument();
  expect(screen.getByText('Детский питбайк 110см3')).toBeInTheDocument();
  expect(screen.getByText('Устройте праздник вашему ребенку!')).toBeInTheDocument();
  expect(screen.getByText('Подростковый питбайк 125см3')).toBeInTheDocument();

  fireEvent.click(services);
  expect(screen.getByText('Аренда мотоцикла')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Двухместные квадроциклы Avantis forester 200 развивают скорость до 70 км/ч и подходят для преодоления самых интересных маршрутов',
    ),
  ).toBeInTheDocument();
  expect(screen.getByText('Аренда снегохода')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Двухместные снегоходы SHARMAX SN-280 развивают скорость до 50 км/ч и подходят для преодоления крутых подъемов, спусков и быстрой езды по глубокому снегу',
    ),
  ).toBeInTheDocument();
});
