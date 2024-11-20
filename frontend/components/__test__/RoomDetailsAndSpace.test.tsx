import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoomDetailsAndSpaces from '@/components/RoomDetailsAndSpaces';



describe('RoomDetailsAndSpaces', () => {
  beforeEach(() => {
    render(<RoomDetailsAndSpaces />);
  });

  // Header tests
  describe('Headers', () => {
    test('renders main section headers', () => {
      expect(screen.getByText('Rooms & beds')).toBeInTheDocument();
      expect(screen.getByText('Spaces')).toBeInTheDocument();
    });

    test('renders bedroom and bathroom headers', () => {
      expect(screen.getByText('2 bedrooms (sleeps 4)')).toBeInTheDocument();
      expect(screen.getByText('1 bathroom')).toBeInTheDocument();
    });
  });


  // Bathroom details test
  describe('Bathroom Details', () => {
    test('renders bathroom information', () => {
      expect(screen.getByText('Full Bathroom')).toBeInTheDocument();
    });
  });

  // Spaces section tests
  describe('Spaces Section', () => {
    test('renders all space amenities', () => {
      const spaces = [
        'Deck or patio',
        'Kitchen',
        'Balcony',
        'Garden'
      ];

      spaces.forEach(space => {
        expect(screen.getByText(space)).toBeInTheDocument();
      });
    });

    test('renders emoji icons for each space', () => {
      const emojis = ['🏡', '🍳', '☘️', '🌳'];
      
      emojis.forEach(emoji => {
        expect(screen.getByText(emoji)).toBeInTheDocument();
      });
    });
  });

  // Link test
  describe('Navigation Link', () => {
    test('renders "See all rooms and beds details" link', () => {
      const link = screen.getByText('See all rooms and beds details');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#');
      expect(link).toHaveClass('text-blue-600');
    });
  });

 
});