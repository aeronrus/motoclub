import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import RequestRent from '../../pages/RequestRent/RequestRent';

describe('Unit-tests for Header', () => {
  test('renders Header correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /Прокат мотоциклов в/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Московской области/i })).toBeInTheDocument();
    expect(screen.getByText('Опытные инструкторы')).toBeInTheDocument();
    expect(screen.getByText('Приемлемые цены')).toBeInTheDocument();
    expect(screen.getByText('Незабываемые эмоции')).toBeInTheDocument();
    expect(screen.queryByText('Заявка на прокат')).not.toBeInTheDocument();
  });
});

describe('Integration Tests for header', () => {
  test('navigates to /request-rent when RequestNav is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/request-rent" element={<RequestRent />} />
        </Routes>
      </MemoryRouter>,
    );

    const button = screen.getByText('Хочу на прокат!');
    fireEvent.click(button);

    expect(screen.getByText('Бронируй заранее')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
