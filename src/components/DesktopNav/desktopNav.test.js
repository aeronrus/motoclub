import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DesktopNav from './DesktopNav';

describe('Unit-tests for DesktopNav', () => {
  test('renders DesktopNav correctly', () => {
    render(
      <MemoryRouter>
        <DesktopNav />
      </MemoryRouter>,
    );

    const main = screen.getByText('Главная');
    const technics = screen.getByText('Техника');
    const services = screen.getByText('Услуги');
    const requestRent = screen.getByText('Записаться');
    const sales = screen.getByText('Акции');
    const contacts = screen.getByText('Контакты');

    expect(main).toBeInTheDocument();
    expect(technics).toBeInTheDocument();
    expect(services).toBeInTheDocument();
    expect(requestRent).toBeInTheDocument();
    expect(sales).toBeInTheDocument();
    expect(contacts).toBeInTheDocument();
  });
});
