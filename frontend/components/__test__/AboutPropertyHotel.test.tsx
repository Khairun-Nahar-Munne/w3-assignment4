import { render, screen } from '@testing-library/react';
import AboutPropertyHotel from '@/components/HotelDetails/AboutPropertyHotel';
import '@testing-library/jest-dom';
import { Hotel } from "@/types/hotel";

// Mock next/image since it's not available in test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock Amenities component
jest.mock('@/components/HotelDetails/Amenites', () => {
  return function MockAmenities({ amenities }: { amenities: string[] }) {
    return <div data-testid="amenities">{amenities.join(', ')}</div>;
  };
});

// Mock CSS module
jest.mock('@/styles/AboutProperty.module.css', () => ({
  aboutContainer: 'aboutContainer',
  aboutContainerHalf: 'aboutContainerHalf',
  aboutHead: 'aboutHead',
  aboutPropertyDescription: 'aboutPropertyDescription',
  aboutPropertyDetails: 'aboutPropertyDetails',
  aboutTitle: 'aboutTitle',
  aboutHighlights: 'aboutHighlights',
  aboutLocationDetails: 'aboutLocationDetails',
  aboutRest: 'aboutRest',
  policies: 'policies',
  aboutPropertyManager: 'aboutPropertyManager',
  languages: 'languages',
  aboutOverflowLink: 'aboutOverflowLink'
}));

describe('AboutPropertyHotel', () => {
  const mockHotel: Hotel = {
      id: '1',
      title: 'Test Hotel',
      description: 'A beautiful test hotel description',
      bedroomCount: 2,
      bathroomCount: 2,
      guestCount: 4,
      amenities: ['WiFi', 'Parking', 'Pool'],
      slug: '',
      images: [],
      host: {
          name: '',
          email: '',
          phone: ''
      },
      address: {
          street: '',
          city: '',
          state: '',
          country: '',
          zipCode: ''
      },
      location: {
          latitude: 0,
          longitude: 0
      },
      rooms: []
  };

  beforeEach(() => {
    render(<AboutPropertyHotel hotel={mockHotel} />);
  });

  it('renders the hotel title correctly', () => {
    expect(screen.getByText('Test Hotel')).toBeInTheDocument();
  });

  it('renders the hotel description', () => {
    expect(screen.getByText('A beautiful test hotel description')).toBeInTheDocument();
  });

  it('displays correct room and guest information', () => {
    const info = screen.getByText(/2 Bedrooms \| 2 Bathrooms \| 4 Guests/i);
    expect(info).toBeInTheDocument();
  });

  it('renders home highlights section', () => {
    expect(screen.getByText(/HOME-HIGHLIGHTS:/)).toBeInTheDocument();
    expect(screen.getByText(/Flat-screen TV, dining table, washer\/dryer/)).toBeInTheDocument();
  });

  it('renders kitchen details', () => {
    expect(screen.getByText(/KITCHEN:/)).toBeInTheDocument();
    expect(screen.getByText(/Fridge, stove, coffee maker/)).toBeInTheDocument();
  });

  it('renders general amenities', () => {
    expect(screen.getByText(/GENERAL:/)).toBeInTheDocument();
    expect(screen.getByText(/Free WiFi, central heating/)).toBeInTheDocument();
  });

  it('renders location details', () => {
    expect(screen.getByText(/-- THE LOCATION --/)).toBeInTheDocument();
    expect(screen.getByText(/GREAT OUTDOORS:/)).toBeInTheDocument();
  });

  it('renders policies section', () => {
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

  it('renders property manager information', () => {
    expect(screen.getByText('Property manager')).toBeInTheDocument();
    expect(screen.getByText('Evolve')).toBeInTheDocument();
    expect(screen.getByAltText('Property Manager')).toBeInTheDocument();
  });

  it('renders languages information', () => {
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('English, French, German, Spanish')).toBeInTheDocument();
  });

  it('renders see more link', () => {
    const link = screen.getByText('See more');
    expect(link).toBeInTheDocument();
    expect(link.tagName.toLowerCase()).toBe('a');
  });

  it('renders Amenities component with correct props', () => {
    const amenities = screen.getByTestId('amenities');
    expect(amenities).toBeInTheDocument();
    expect(amenities).toHaveTextContent('WiFi, Parking, Pool');
  });

  // Test for specific CSS classes
  it('applies correct CSS classes', () => {
    expect(document.querySelector('.aboutContainer')).toBeInTheDocument();
    expect(document.querySelector('.aboutContainerHalf')).toBeInTheDocument();
    expect(document.querySelector('.aboutPropertyDescription')).toBeInTheDocument();
    expect(document.querySelector('.aboutPropertyDetails')).toBeInTheDocument();
    expect(document.querySelector('.aboutLocationDetails')).toBeInTheDocument();
  });
});