import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contacts from './Contacts';
import { act } from 'react';

describe('Unit-tests Contacts', () => {
  test('render Contacts correctly', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Contacts />
        </MemoryRouter>,
      );
    });
    expect(screen.getByText('Контактная информация')).toBeInTheDocument();
    expect(screen.getByText('Мы находимся здесь:')).toBeInTheDocument();
    expect(screen.getByText('+7 911 196-15-20')).toBeInTheDocument();
    expect(screen.getByText('+7 911 659-76-74')).toBeInTheDocument();
    expect(screen.getByText('Эндурокат')).toBeInTheDocument();
  });
});

describe('Integration tests Contacts', () => {
  test('render Contacts correctly', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Contacts />
        </MemoryRouter>,
      );
    });
    const geo = screen.getByText('Эндурокат');
    fireEvent.click(geo);
  });
});
