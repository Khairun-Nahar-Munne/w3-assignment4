import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '@/components/Banner';
import ShareModal from '@/components/BModal';

// Mock FontAwesomeIcon component to avoid potential rendering issues in tests
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, style }: { icon: any, style?: React.CSSProperties }) => (
    <span data-testid={`icon-${icon.iconName}`} style={style}></span>
  ),
}));

// Mock ShareModal component
jest.mock('@/components/BModal', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
    <div data-testid="share-modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe('Banner Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test to prevent side effects
    localStorage.clear();
  });

  test('renders the Banner component correctly', () => {
    render(<Banner />);

    // Check if the "See all property" link is present
    expect(screen.getByText('See all property')).toBeInTheDocument();
    // Check if the "Share" button is present
    expect(screen.getByText('Share')).toBeInTheDocument();
    // Check if the "Save" button is present
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('toggles save icon and updates localStorage', () => {
    render(<Banner />);

    const saveButton = screen.getByText('Save');
    const heartIcon = screen.getByTestId('icon-heart');

    // Initial state: not saved
    expect(heartIcon).not.toHaveStyle('color: red');
    expect(localStorage.getItem('heartIconColor')).toBeNull();

    // Click to save
    fireEvent.click(saveButton);
    expect(heartIcon).toHaveStyle('color: red');
    expect(localStorage.getItem('heartIconColor')).toBe('red');

    // Click to unsave
    fireEvent.click(saveButton);
    expect(heartIcon).not.toHaveStyle('color: red');
    expect(localStorage.getItem('heartIconColor')).toBeNull();
  });

  test('opens and closes ShareModal correctly', () => {
    render(<Banner />);

    const shareButton = screen.getByText('Share');

    // Initially, the modal should not be visible
    const shareModal = screen.getByTestId('share-modal');
    expect(shareModal).toHaveStyle('display: none');

    // Click to open the modal
    fireEvent.click(shareButton);
    expect(shareModal).toHaveStyle('display: block');

    // Close the modal by clicking the "Close" button
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(shareModal).toHaveStyle('display: none');
  });

  test('loads saved state from localStorage on mount', () => {
    // Simulate a previously saved state in localStorage
    localStorage.setItem('heartIconColor', 'red');

    render(<Banner />);

    const heartIcon = screen.getByTestId('icon-heart');
    // Check if the icon is red based on the saved state
    expect(heartIcon).toHaveStyle('color: red');
  });
});
