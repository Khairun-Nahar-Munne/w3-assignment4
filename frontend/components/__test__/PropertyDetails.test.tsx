import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyDetails from '@/components/PropertyDetails';

// Mock the Lucide icons
jest.mock('lucide-react', () => ({
  Car: () => <div data-testid="car-icon">Car Icon</div>,
  ChefHat: () => <div data-testid="chef-hat-icon">Chef Hat Icon</div>,
  Home: () => <div data-testid="home-icon">Home Icon</div>,
  MapPin: () => <div data-testid="map-pin-icon">Map Pin Icon</div>,
  Plane: () => <div data-testid="plane-icon">Plane Icon</div>,
  ChevronRight: () => <div data-testid="chevron-right-icon">Chevron Right Icon</div>,
  Flame: () => <div data-testid="flame-icon">Flame Icon</div>,
  Shirt: () => <div data-testid="shirt-icon">Shirt Icon</div>,
  Container: () => <div data-testid="container-icon">Container Icon</div>,
}));

describe('PropertyDetails', () => {
  beforeEach(() => {
    render(<PropertyDetails />);
  });

  describe('Amenities Section', () => {
    it('renders the amenities section title', () => {
      expect(screen.getByText('Popular amenities')).toBeInTheDocument();
    });

    it('renders all amenities with their icons', () => {
      const amenities = [
        { icon: 'flame-icon', name: 'Barbecue grill' },
        { icon: 'shirt-icon', name: 'Washer' },
        { icon: 'home-icon', name: 'Outdoor Space' },
        { icon: 'car-icon', name: 'Parking available' },
        { icon: 'chef-hat-icon', name: 'Kitchen' },
        { icon: 'container-icon', name: 'Dryer' },
      ];

      amenities.forEach(({ icon, name }) => {
        expect(screen.getByTestId(icon)).toBeInTheDocument();
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });

    it('renders the "See all property amenities" button', () => {
      const button = screen.getByText('See all property amenities');
      expect(button).toBeInTheDocument();
      expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
    });
  });

  describe('Explore the Area Section', () => {
    it('renders the section title', () => {
      expect(screen.getByText('Explore the area')).toBeInTheDocument();
    });

    it('renders the map card with correct location', () => {
      expect(screen.getByText('Juneau, Alaska')).toBeInTheDocument();
      const mapLink = screen.getByText('View in a map');
      expect(mapLink).toHaveAttribute('href', 'https://maps.app.goo.gl/zWc7TiHSLVhMqcgYA');
      expect(mapLink).toHaveAttribute('target', '_blank');
      expect(mapLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders all location information correctly', () => {
      // Test locations and their names
      expect(screen.getByText('Auke Bay')).toBeInTheDocument();
      expect(screen.getByText('University of Alaska-Southeast')).toBeInTheDocument();
      expect(screen.getByText('Mendenhall Golf Course')).toBeInTheDocument();
      expect(screen.getByText('Juneau, AK (JNU-Juneau Intl.)')).toBeInTheDocument();

      // Test durations
      expect(screen.getByText('6 min drive')).toBeInTheDocument();
      expect(screen.getAllByText('10 min drive')).toHaveLength(2);
      expect(screen.getByText('14 min drive')).toBeInTheDocument();
    });

    it('renders the correct number of MapPin icons', () => {
      const mapPinIcons = screen.getAllByTestId('map-pin-icon');
      expect(mapPinIcons).toHaveLength(3); // Three locations use MapPin
    });

    it('renders one Plane icon for the airport', () => {
      expect(screen.getByTestId('plane-icon')).toBeInTheDocument();
    });

    it('renders the "See more about this area" button', () => {
      expect(screen.getByText('See more about this area')).toBeInTheDocument();
    });
  });

  describe('Responsive Layout', () => {
    it('has the correct wrapper classes for responsive design', () => {
      const wrapper = screen.getByText('Popular amenities').closest('div');
      expect(wrapper).toHaveClass('max-w-4xl');
    });

   
  });
});