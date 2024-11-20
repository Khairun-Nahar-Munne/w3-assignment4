import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Amenities from '@/components/HotelDetails/Amenites';

describe('Amenities', () => {
  const mockAmenities = [
    'Swimming Pool',
    'Gym',
    'Parking',
    'Wi-Fi'
  ];

  it('renders without crashing', () => {
    render(<Amenities amenities={mockAmenities} />);
  });

  it('renders the correct heading', () => {
    render(<Amenities amenities={mockAmenities} />);
    expect(screen.getByText('Amenities')).toBeInTheDocument();
    expect(screen.getByText('Amenities')).toHaveClass('text-2xl');
  });

  it('renders all amenities from the props', () => {
    render(<Amenities amenities={mockAmenities} />);
    
    mockAmenities.forEach(amenity => {
      expect(screen.getByText(amenity)).toBeInTheDocument();
    });
  });

  it('renders correct number of amenities', () => {
    render(<Amenities amenities={mockAmenities} />);
    
    const amenityElements = screen.getAllByText(/./);
    // Subtract 1 for the heading "Amenities"
    expect(amenityElements.length - 1).toBe(mockAmenities.length);
  });

  it('renders bullet points for each amenity', () => {
    render(<Amenities amenities={mockAmenities} />);
    
    const bulletPoints = document.querySelectorAll('.bg-blue-500');
    expect(bulletPoints).toHaveLength(mockAmenities.length);
  });

  it('handles empty amenities array', () => {
    render(<Amenities amenities={[]} />);
    
    expect(screen.getByText('Amenities')).toBeInTheDocument();
    const bulletPoints = document.querySelectorAll('.bg-blue-500');
    expect(bulletPoints).toHaveLength(0);
  });

  it('applies correct styling classes', () => {
    render(<Amenities amenities={mockAmenities} />);
    
    const container = screen.getByText('Amenities').parentElement;
    expect(container).toHaveClass('mb-8');
    
    const amenitiesGrid = container?.querySelector('.grid');
    expect(amenitiesGrid).toHaveClass('grid-cols-1', 'gap-4');
  });
});