import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileNav from './MobileNav';

describe('Unit-tests for MobileNav', () => {
  test('renders MobileNav correctly', () => {
    render(
      <MemoryRouter>
        <MobileNav />
      </MemoryRouter>,
    );
    const iconNav = screen.getByTestId('iconNav');
    fireEvent.click(iconNav);

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
