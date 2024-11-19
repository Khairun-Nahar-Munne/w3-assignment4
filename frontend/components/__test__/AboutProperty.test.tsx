import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutProperty from '@/components/AboutProperty';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));

// Mock FontAwesome components
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="font-awesome-icon" />,
}));

describe('AboutProperty Component', () => {
  beforeEach(() => {
    render(<AboutProperty />);
  });

  describe('Header Section', () => {
    test('renders main heading and subheading', () => {
      expect(screen.getByText('About the property')).toBeInTheDocument();
      expect(screen.getByText('Juneau Vacation Home: Stunning View + Beach Access')).toBeInTheDocument();
    });

    test('renders property description', () => {
      expect(screen.getByText(/Escape to the mountains/)).toBeInTheDocument();
      expect(screen.getByText(/Perched on the shore of Lena Cove/)).toBeInTheDocument();
    });
  });

  describe('Property Details Section', () => {
    test('renders property specifications', () => {
      expect(screen.getByText(/CBJ000104/)).toBeInTheDocument();
      expect(screen.getByText(/1,115 Sq Ft/)).toBeInTheDocument();
    });

    test('renders bedroom information', () => {
      expect(screen.getByText(/Bedroom 1: Queen Bed/)).toBeInTheDocument();
      expect(screen.getByText(/Bedroom 2: Extra Long Twin Bed/)).toBeInTheDocument();
    });

    test('renders home highlights', () => {
      const highlights = screen.getByText(/HOME-HIGHLIGHTS:/);
      expect(highlights).toBeInTheDocument();
      expect(screen.getByText(/Flat-screen TV, dining table, washer\/dryer/)).toBeInTheDocument();
    });

    test('renders kitchen amenities', () => {
      expect(screen.getByText(/KITCHEN:/)).toBeInTheDocument();
      expect(screen.getByText(/Fridge, stove, coffee maker/)).toBeInTheDocument();
    });
  });

  describe('Location Section', () => {
    test('renders location details', () => {
      expect(screen.getByText(/-- THE LOCATION --/)).toBeInTheDocument();
      expect(screen.getByText(/Lena Cove \(on-site\)/)).toBeInTheDocument();
      expect(screen.getByText(/Mendenhall Glacier/)).toBeInTheDocument();
    });
  });

  describe('Policies Section', () => {
    test('renders all policy items', () => {
      const policies = [
        'No smoking',
        'No pets allowed',
        'No events, parties, or large gatherings',
        'Must be at least 25 years old to book',
        'Additional fees and taxes may apply',
      ];

      policies.forEach(policy => {
        expect(screen.getByText(policy, { exact: false })).toBeInTheDocument();
      });
    });
  });

  describe('Property Manager Section', () => {
    test('renders property manager information', () => {
      expect(screen.getByText('Property manager')).toBeInTheDocument();
      expect(screen.getByText('Evolve')).toBeInTheDocument();
      expect(screen.getByAltText('Property Manager')).toBeInTheDocument();
    });
  });

  describe('Languages Section', () => {
    test('renders supported languages', () => {
      expect(screen.getByText('Languages')).toBeInTheDocument();
      expect(screen.getByText('English, French, German, Spanish')).toBeInTheDocument();
    });
  });

  describe('Amenities Section', () => {
    test('renders amenities section with title', () => {
      expect(screen.getByText('Amenities')).toBeInTheDocument();
    });

    test('renders amenity items', () => {
      const amenities = ['Kitchen', 'Dryer', 'Washer', 'Ocean', 'Outdoor Space'];
      amenities.forEach(amenity => {
        expect(screen.getByText(amenity)).toBeInTheDocument();
      });
    });

    test('renders "See all amenities" link', () => {
      expect(screen.getByText('See all 34 amenities')).toBeInTheDocument();
    });

    test('renders FontAwesome icons', () => {
      const icons = screen.getAllByTestId('font-awesome-icon');
      expect(icons.length).toBeGreaterThan(0);
    });
  });
});