import { fireEvent, render, screen } from '@testing-library/react';
import friend from '../../assets/helpers/sales/friend4.jpg';
import company from '../../assets/helpers/sales/company2.jpg';
import Slider from './Slider';

const mockSliderData = [
  { title: 'Прокат с другом', description: 'Приведи друга и получи скидку 5%', img: friend },
  {
    title: 'Для шумных компаний',
    description: 'Скидка на катание 4+ человек 7%',
    img: company,
  },
];

describe('Slider', () => {
  test('renders slider with correct data', () => {
    render(<Slider data={mockSliderData} />);

    expect(screen.getByText(mockSliderData[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockSliderData[0].description)).toBeInTheDocument();
    expect(screen.getByAltText(mockSliderData[0].img)).toHaveAttribute(
      'src',
      mockSliderData[0].img,
    );

    expect(screen.getByText(mockSliderData[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockSliderData[1].description)).toBeInTheDocument();
    expect(screen.getByAltText(mockSliderData[1].img)).toHaveAttribute(
      'src',
      mockSliderData[1].img,
    );
  });

  test('no renders another pages', () => {
    render(<Slider data={mockSliderData} />);
    expect(screen.queryByText('Заявка на прокат')).not.toBeInTheDocument();
  });

  test('navigate to slide when button is clicked', () => {
    render(<Slider data={mockSliderData} />);
    const leftButton = screen.getByTestId('left');
    const rightButton = screen.getByTestId('right');

    expect(screen.getByText(mockSliderData[0].title).closest('.slide')).toHaveClass('active');
    expect(screen.getByText(mockSliderData[1].title).closest('.slide')).not.toHaveClass('active');

    fireEvent.click(rightButton);
    expect(screen.getByText(mockSliderData[1].title).closest('.slide')).toHaveClass('active');
    expect(screen.getByText(mockSliderData[0].title).closest('.slide')).not.toHaveClass('active');

    fireEvent.click(leftButton);
    expect(screen.getByText(mockSliderData[0].title).closest('.slide')).toHaveClass('active');
    expect(screen.getByText(mockSliderData[1].title).closest('.slide')).not.toHaveClass('active');
  });

  test('disables buttons on the first slide', () => {
    render(<Slider data={mockSliderData} />);
    const leftButton = screen.getByTestId('left');
    const rightButton = screen.getByTestId('right');

    expect(leftButton).toHaveClass('disable');

    fireEvent.click(rightButton);
    expect(rightButton).toHaveClass('disable');
  });
});
