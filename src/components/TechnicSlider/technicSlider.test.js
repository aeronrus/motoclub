import bse1101 from '../../assets/bse110/bse110.jpg';
import bse1102 from '../../assets/bse110/bse110(2).jpg';
import TechnicSlider from './TechnicSlider';
import { fireEvent, render, screen } from '@testing-library/react';

const mockTechnicSliderData = [bse1101, bse1102];

describe('Unit-tests TechnicSlider', () => {
  test('renders TechnicSlider data correctly', () => {
    render(<TechnicSlider data={mockTechnicSliderData} />);
    expect(screen.getByAltText(mockTechnicSliderData[0])).toBeInTheDocument();
    expect(screen.getByAltText(mockTechnicSliderData[0])).toHaveAttribute(
      'src',
      mockTechnicSliderData[0],
    );
    expect(screen.getByAltText(mockTechnicSliderData[1])).toBeInTheDocument();
    expect(screen.getByAltText(mockTechnicSliderData[1])).toHaveAttribute(
      'src',
      mockTechnicSliderData[1],
    );

    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  test('no renders another pages', () => {
    render(<TechnicSlider data={mockTechnicSliderData} />);
    expect(screen.queryByText('Заявка на прокат')).not.toBeInTheDocument();
  });

  test('navigate to slide when button is clicked', () => {
    render(<TechnicSlider data={mockTechnicSliderData} />);
    const leftButton = screen.getByTestId('left');
    const rightButton = screen.getByTestId('right');

    expect(screen.getByAltText(mockTechnicSliderData[0]).closest('.technicSlide')).toHaveClass(
      'active',
    );
    expect(screen.getByAltText(mockTechnicSliderData[1]).closest('.technicSlide')).not.toHaveClass(
      'active',
    );

    fireEvent.click(rightButton);
    expect(screen.getByAltText(mockTechnicSliderData[1]).closest('.technicSlide')).toHaveClass(
      'active',
    );
    expect(screen.getByAltText(mockTechnicSliderData[0]).closest('.technicSlide')).not.toHaveClass(
      'active',
    );

    fireEvent.click(leftButton);
    expect(screen.getByAltText(mockTechnicSliderData[0]).closest('.technicSlide')).toHaveClass(
      'active',
    );
    expect(screen.getByAltText(mockTechnicSliderData[1]).closest('.technicSlide')).not.toHaveClass(
      'active',
    );
  });
  test('disables buttons on the first slide', () => {
    render(<TechnicSlider data={mockTechnicSliderData} />);
    const leftButton = screen.getByTestId('left');
    const rightButton = screen.getByTestId('right');

    expect(leftButton).toHaveClass('disable');

    fireEvent.click(rightButton);
    expect(rightButton).toHaveClass('disable');
  });
});
