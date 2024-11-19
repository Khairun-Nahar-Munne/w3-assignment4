import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShareModal from '@/components/BModal';

// Mock FontAwesomeIcon component to avoid potential rendering issues in tests
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }: { icon: any }) => (
    <span data-testid={`icon-${icon.iconName}`} />
  ),
}));

// Mock Image component from Next.js to avoid rendering issues in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

// Mock clipboard writeText
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe('ShareModal Component', () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders ShareModal with content when isOpen is true', () => {
    render(<ShareModal isOpen={true} onClose={onCloseMock} />);

    // Check if the modal content is displayed
    expect(screen.getByText('Juneau Vacation Home: Stunning View + Beach Access')).toBeInTheDocument();
    expect(screen.getByText('United States of America')).toBeInTheDocument();
    expect(screen.getByText('9.8/10')).toBeInTheDocument();

    // Check if all sharing options are present
    expect(screen.getByText('Messenger')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Copy link')).toBeInTheDocument();
  });

  test('does not render ShareModal when isOpen is false', () => {
    render(<ShareModal isOpen={false} onClose={onCloseMock} />);

    // Ensure that the modal content is not visible
    expect(screen.queryByText('Juneau Vacation Home: Stunning View + Beach Access')).toBeNull();
  });

  test('calls onClose when the close button is clicked', () => {
    render(<ShareModal isOpen={true} onClose={onCloseMock} />);

    const closeButton = screen.getByTestId('icon-xmark');
    fireEvent.click(closeButton);

    // onClose should be called once
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('copies link to clipboard and shows "Copied!" message', () => {
    render(<ShareModal isOpen={true} onClose={onCloseMock} />);

    // Click the copy link button
    const copyLinkButton = screen.getByText('Copy link');
    fireEvent.click(copyLinkButton);

    // Ensure clipboard's writeText method was called with the expected URL
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "https://www.vrbo.com/2983918?dateless=true&x_pwa=1&rfrr=HSR&pwa_ts=1730820725756&referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&useRewards=false&adults=2&regionId=956&destination=Cox%27s+Bazar%2C+Chittagong+Division%2C+Bangladesh&destType=MARKET&latLong=21.360771%2C92.020443&privacyTrackingState=CAN_TRACK&searchId=d68f7778-3b3e-4d74-9726-4f9a2d1c5497&sort=RECOMMENDED&userIntent=&expediaPropertyId=84083026&propertyName=Opelia+Beach+Resort+%3Cbr%3EBehind+KFC%2C+120m+inside%2C+1+minute+walking+distance+from+KFC://example.com"
    );

    // Check if the "Copied!" message is displayed
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });

  test('calls onClose when share option is clicked', () => {
    render(<ShareModal isOpen={true} onClose={onCloseMock} />);

    const messengerButton = screen.getByText('Messenger');
    fireEvent.click(messengerButton);

    // onClose should be called after selecting a share option
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
