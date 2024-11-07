import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import RequestRent from '../../pages/RequestRent/RequestRent';
import { act } from 'react';

const mockServiceData = {
  img: 'test-image.jpg',
  title: 'Test Service',
  description: 'This is a test service description.',
  price: ['2500руб', '1500руб'],
};

describe('Unit-tests ServiceCard', () => {
  test('renders service data correctly', () => {
    act(() => {
      render(
        <MemoryRouter>
          <ServiceCard serviceData={mockServiceData} />
        </MemoryRouter>,
      );
    });
    expect(screen.getByAltText(mockServiceData.title)).toBeInTheDocument();
  });

  test('no renders another pages', () => {
    act(() => {
      render(
        <MemoryRouter>
          <ServiceCard serviceData={mockServiceData} />
        </MemoryRouter>,
      );
    });
    expect(screen.queryByText('Заявка на прокат')).not.toBeInTheDocument();
  });
});

describe('Integration Tests for ServiceCard', () => {
  test('navigates to /request-rent when RequestButton is clicked', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/services']}>
          <Routes>
            <Route path="/services" element={<ServiceCard serviceData={mockServiceData} />} />
            <Route path="/request-rent" element={<RequestRent />} />
          </Routes>
        </MemoryRouter>,
      );
    });
    const button = screen.getByText('Записаться');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Заполните форму')).toBeInTheDocument();
      expect(screen.getByTestId('form')).toBeInTheDocument();
    });
  });
});
