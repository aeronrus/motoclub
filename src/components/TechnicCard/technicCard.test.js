import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TechnicCard from './TechnicCard';
import bse1101 from '../../assets/bse110/bse110.jpg';
import bse1102 from '../../assets/bse110/bse110(2).jpg';
import RequestRent from '../../pages/RequestRent/RequestRent';
import { act } from 'react';

const mockTechnicData = {
  title: 'Детский питбайк 110см3',
  img: [bse1101, bse1102],
  subtitle: 'Устройте праздник вашему ребенку!',
  description: ['Идеален для детей новичков', 'Автоматическая КПП', 'Подходит для роста 140-165'],
  price: ['1999руб', '1500руб'],
};

describe('Unit-tests TechnicCard', () => {
  test('renders service data correctly', () => {
    act(() => {
      render(
        <MemoryRouter>
          <TechnicCard technicData={mockTechnicData} />
        </MemoryRouter>,
      );
    });
    expect(screen.getByText(mockTechnicData.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockTechnicData.img[0])).toBeInTheDocument();
    expect(screen.getByAltText(mockTechnicData.img[1])).toBeInTheDocument();
    expect(screen.getByText(mockTechnicData.description[0])).toBeInTheDocument();
  });
});

describe('Integration Tests for TechnicCard', () => {
  test('navigates to /request-rent when RequestButton is clicked', async () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/technics']}>
          <Routes>
            <Route path="/technics" element={<TechnicCard technicData={mockTechnicData} />} />
            <Route path="/request-rent" element={<RequestRent />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    const button = screen.getByText('Записаться');
    expect(screen.getByText(mockTechnicData.title)).toBeInTheDocument();
    expect(screen.getByText('Идеален для детей новичков')).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Заполните форму')).toBeInTheDocument();
      expect(screen.getByText('Бронируй заранее')).toBeInTheDocument();
      expect(screen.getByTestId('form')).toBeInTheDocument();
    });
  });
});
