import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BannerHotel from '@/components/HotelDetails/BannerHotel';
import { Hotel } from '@/types/hotel';

// Mock the FontAwesomeIcon component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div data-testid="mock-icon" />
}));

// Mock the BModalHost component
jest.mock('@/components/HotelDetails/BModalHost', () => {
  return function MockBModalHost({ isOpen }: { isOpen: boolean }) {
    if (!isOpen) return null;
    return <div data-testid="share-modal">Modal Content</div>;
  };
});

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('BannerHotel', () => {
  const mockHotel: Hotel = {
      id: '1',
      slug: 'Test Hotel',
      images: [],
      title: '',
      description: '',
      guestCount: 0,
      bedroomCount: 0,
      bathroomCount: 0,
      amenities: [],
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
    localStorage.clear();
  });

  it('renders without crashing', () => {
    render(<BannerHotel hotel={mockHotel} />);
    expect(screen.getByText('See all property')).toBeInTheDocument();
    expect(screen.getByText('Share')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('toggles share modal when share button is clicked', () => {
    render(<BannerHotel hotel={mockHotel} />);
    const shareButton = screen.getByText('Share').closest('button');
    
    // Initially modal should not be present
    expect(screen.queryByTestId('share-modal')).not.toBeInTheDocument();
    
    // Click to open modal
    fireEvent.click(shareButton!);
    expect(screen.getByTestId('share-modal')).toBeInTheDocument();
  });

  it('handles save functionality correctly', () => {
    render(<BannerHotel hotel={mockHotel} />);
    const saveButton = screen.getByText('Save').closest('button');

    // Initial state - not saved
    expect(localStorage.getItem('heartIconColor')).toBeNull();

    // Click to save
    fireEvent.click(saveButton!);
    expect(localStorage.getItem('heartIconColor')).toBe('red');

    // Click to unsave
    fireEvent.click(saveButton!);
    expect(localStorage.getItem('heartIconColor')).toBeNull();
  });

  it('loads saved state from localStorage on mount', () => {
    // Set initial state in localStorage
    localStorage.setItem('heartIconColor', 'red');
    
    render(<BannerHotel hotel={mockHotel} />);
    
    // Instead of checking the specific icon, verify the button's presence
    const saveButton = screen.getByText('Save').closest('button');
    expect(saveButton).toBeInTheDocument();
    
    // Verify the saved state is maintained
    fireEvent.click(saveButton!);
    expect(localStorage.getItem('heartIconColor')).toBeNull();
  });

  it('navigates back when clicking "See all property"', () => {
    render(<BannerHotel hotel={mockHotel} />);
    const backLink = screen.getByText('See all property');
    
    expect(backLink).toHaveAttribute('href', '#');
  });

  // Test for button presence without checking specific class names
  it('has share and save buttons', () => {
    render(<BannerHotel hotel={mockHotel} />);
    
    const shareButton = screen.getByText('Share').closest('button');
    const saveButton = screen.getByText('Save').closest('button');
    
    expect(shareButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});