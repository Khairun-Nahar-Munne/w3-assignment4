import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import VacationListing from '@/components/VacationListing';

// Mock next/head to prevent errors
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Mock next/link
jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ children, href }: { children: React.ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    ),
  };
});

describe('VacationListing', () => {
  it('renders the main heading and property details', () => {
    render(<VacationListing />);
    
    expect(screen.getByText('Juneau Vacation Home: Stunning View + Beach Access')).toBeInTheDocument();
    expect(screen.getByText('Entire home')).toBeInTheDocument();
    expect(screen.getByText('Exceptional')).toBeInTheDocument();
    expect(screen.getByText('2 bedrooms')).toBeInTheDocument();
    expect(screen.getByText('1 bathroom')).toBeInTheDocument();
  });

  it('displays the correct initial price and total', () => {
    render(<VacationListing />);
    
    expect(screen.getByText('$134')).toBeInTheDocument();
    expect(screen.getByText('per night')).toBeInTheDocument();
    expect(screen.getByText('$543')).toBeInTheDocument();
  });

  it('opens and closes the travelers popup', async () => {
    render(<VacationListing />);
    
    // Initially, the popup should not be visible
    expect(screen.queryByText('I am traveling with pets')).not.toBeInTheDocument();
    
    // Click to open the popup
    const travelersButton = screen.getByText(/2 travelers/);
    fireEvent.click(travelersButton);
    
    // Popup should now be visible
    expect(screen.getByText('I am traveling with pets')).toBeInTheDocument();
    
    // Click the Done button
    const doneButton = screen.getByText('Done');
    fireEvent.click(doneButton);
    
    // Popup should be closed
    await waitFor(() => {
      expect(screen.queryByText('I am traveling with pets')).not.toBeInTheDocument();
    });
  });

  it('correctly updates traveler counts', () => {
    render(<VacationListing />);
    
    // Open travelers popup
    const travelersButton = screen.getByText(/2 travelers/);
    fireEvent.click(travelersButton);
    
    // Test increasing adults
    const addAdultButton = screen.getAllByText('+')[0];
    fireEvent.click(addAdultButton);
    expect(screen.getByText('3')).toBeInTheDocument();
    
    // Test increasing children
    const addChildButton = screen.getAllByText('+')[1];
    fireEvent.click(addChildButton);
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
    
    // Verify total travelers updated
    expect(screen.getByText(/4 travelers/)).toBeInTheDocument();
  });

  it('disables decrease buttons when count is zero', () => {
    render(<VacationListing />);
    
    // Open travelers popup
    const travelersButton = screen.getByText(/2 travelers/);
    fireEvent.click(travelersButton);
    
    // Find decrease buttons
    const decreaseButtons = screen.getAllByText('-');
    
    // Check if children decrease button is disabled (initial count is 0)
    expect(decreaseButtons[1]).toBeDisabled();
    
    // Adults decrease button should be enabled (initial count is 2)
    expect(decreaseButtons[0]).not.toBeDisabled();
  });

  it('checks navigation links are present', () => {
    render(<VacationListing />);
    
    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Amenities')).toBeInTheDocument();
    expect(screen.getByText('Policies')).toBeInTheDocument();
  });

  it('displays free cancellation information', () => {
    render(<VacationListing />);
    
    expect(screen.getByText('Free cancellation')).toBeInTheDocument();
    expect(screen.getByText('Before Mon, Nov 4')).toBeInTheDocument();
  });

  it('shows check-in and check-out dates', () => {
    render(<VacationListing />);
    
    expect(screen.getByText('Nov 18')).toBeInTheDocument();
    expect(screen.getByText('Nov 20')).toBeInTheDocument();
  });
});