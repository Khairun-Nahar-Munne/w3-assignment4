import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingCard from '@/components/HotelDetails/BookingCard';

describe('BookingCard', () => {
  beforeEach(() => {
    render(<BookingCard />);
  });

  describe('Initial Render', () => {
    it('renders the sign-in section', () => {
      expect(screen.getByText(/Members get our best prices when signed in!/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('displays the initial price information', () => {
      expect(screen.getByText('$134')).toBeInTheDocument();
      expect(screen.getByText(/per night/i)).toBeInTheDocument();
      expect(screen.getByText('$543')).toBeInTheDocument();
    });

    it('shows cancellation policy', () => {
      expect(screen.getByText(/Free cancellation/i)).toBeInTheDocument();
      expect(screen.getByText(/Before Mon, Nov 4/i)).toBeInTheDocument();
    });

    it('displays default check-in and check-out dates', () => {
      expect(screen.getByText('Nov 18')).toBeInTheDocument();
      expect(screen.getByText('Nov 20')).toBeInTheDocument();
    });

    it('shows initial traveler count', () => {
      expect(screen.getByText(/2 travelers/i)).toBeInTheDocument();
    });
  });

  describe('Travelers Popup Functionality', () => {
    it('opens travelers popup when clicked', () => {
      const travelersButton = screen.getByTestId('travelers-button');
      fireEvent.click(travelersButton);
      
      expect(screen.getByText(/Ages 0 to 17/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Done/i })).toBeInTheDocument();
    });

    it('increments adult count correctly', () => {
      // Open popup
      const travelersButton = screen.getByTestId('travelers-button');
      fireEvent.click(travelersButton);

      // Find and click the + button in the Adults section
      const adultPlusButton = screen.getAllByRole('button', { name: '+' })[0];
      fireEvent.click(adultPlusButton);

      // Check if the count updated
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText(/3 travelers/i)).toBeInTheDocument();
    });

    it('decrements adult count correctly', () => {
      // Open popup
      const travelersButton = screen.getByTestId('travelers-button');
      fireEvent.click(travelersButton);

      // Find and click the - button in the Adults section
      const adultMinusButton = screen.getAllByRole('button', { name: '-' })[0];
      fireEvent.click(adultMinusButton);

      // Check if the count updated
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText(/1 traveler/i)).toBeInTheDocument();
    });

    it('prevents adult count from going below 0', () => {
      // Open popup
      const travelersButton = screen.getByTestId('travelers-button');
      fireEvent.click(travelersButton);

      // Click minus button multiple times
      const adultMinusButton = screen.getAllByRole('button', { name: '-' })[0];
      fireEvent.click(adultMinusButton);
      fireEvent.click(adultMinusButton);
      fireEvent.click(adultMinusButton);

      // Check if the count stopped at 0
      expect(screen.getAllByText('0')[0]).toBeInTheDocument();
    });

    it('closes popup when Done button is clicked', () => {
      // Open popup
      const travelersButton = screen.getByTestId('travelers-button');
      fireEvent.click(travelersButton);

      // Click Done button
      const doneButton = screen.getByRole('button', { name: /Done/i });
      fireEvent.click(doneButton);

      // Verify popup is closed
      expect(screen.queryByRole('button', { name: /Done/i })).not.toBeInTheDocument();
    });
  });

  describe('Pet Checkbox Functionality', () => {
    it('allows selecting pet travel option', () => {
      // Open popup
      const travelersButton = screen.getByTestId('travelers-button');
      fireEvent.click(travelersButton);

      // Find and click the pet checkbox
      const petCheckbox = screen.getByRole('checkbox') as HTMLInputElement;
      fireEvent.click(petCheckbox);

      // Verify checkbox is checked
      expect(petCheckbox).toBeChecked();
    });
  });

  describe('Booking Actions', () => {
    it('renders book now button', () => {
      const bookButton = screen.getByRole('button', { name: /book now/i });
      expect(bookButton).toBeInTheDocument();
    });

    it('displays not charged yet message', () => {
      expect(screen.getByText(/You will not be charged yet/i)).toBeInTheDocument();
    });

    it('shows property number', () => {
      expect(screen.getByText('9838104ha')).toBeInTheDocument();
    });
  });
});