import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BModalHost from '@/components/HotelDetails/BModalHost';
import { Hotel } from '@/types/hotel';
import styles from '@/styles/banner.module.css';

// Mock CSS modules
jest.mock('@/styles/banner.module.css', () => ({
  sharePopup: 'sharePopup',
  hidden: 'hidden',
  shareContent: 'shareContent',
  shareImage: 'shareImage',
  shareInfo: 'shareInfo',
  shareOptions: 'shareOptions',
  shareOption: 'shareOption',
  copyLink: 'copyLink',
  sharePopupClose: 'sharePopupClose'
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}));

// Mock FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span>icon</span>
}));

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe('BModalHost Component', () => {
  const mockHotel: Hotel = {
      title: 'Test Hotel',
      address: {
          country: 'Test Country',
          street: '',
          city: '',
          state: '',
          zipCode: ''
      },
      id: '',
      slug: '',
      images: [],
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
      location: {
          latitude: 0,
          longitude: 0
      },
      rooms: []
  };

  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    hotel: mockHotel,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when isOpen is false', () => {
    const { container } = render(
      <BModalHost {...defaultProps} isOpen={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders modal content when isOpen is true', () => {
    render(<BModalHost {...defaultProps} />);
    
    expect(screen.getByText(mockHotel.title)).toBeInTheDocument();
    expect(screen.getByText(mockHotel.address.country)).toBeInTheDocument();
    expect(screen.getByText('9.8/10')).toBeInTheDocument();
  });

  it('renders all share options', () => {
    render(<BModalHost {...defaultProps} />);
    
    expect(screen.getByText('Messenger')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Copy link')).toBeInTheDocument();
  });

  
  it('copies link to clipboard and shows confirmation message', async () => {
    render(<BModalHost {...defaultProps} />);
    
    const copyButton = screen.getByRole('button', { name: /copy link/i });
    fireEvent.click(copyButton);
    
    // Verify clipboard API was called
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    
    // Verify "Copied!" message appears
    expect(screen.getByText('Copied!')).toBeInTheDocument();
    
    // Verify message disappears after 2 seconds
    await waitFor(() => {
      expect(screen.queryByText('Copied!')).not.toBeInTheDocument();
    }, { timeout: 2100 });
  });

  it('calls handleShareOption and closes modal when sharing options are clicked', () => {
    render(<BModalHost {...defaultProps} />);
    
    const messengerButton = screen.getByRole('button', { name: /messenger/i });
    fireEvent.click(messengerButton);
    
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('renders the hotel image with correct props', () => {
    render(<BModalHost {...defaultProps} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/img1.jpg');
    expect(image).toHaveAttribute('alt', 'Juneau Vacation Home');
    expect(image).toHaveAttribute('width', '100');
    expect(image).toHaveAttribute('height', '100');
  });

  // Test for CSS classes
  it('applies correct CSS classes', () => {
    const { container } = render(<BModalHost {...defaultProps} />);
    
    const modalElement = container.firstChild as HTMLElement;
    // Test the presence of the className string instead of the actual CSS module class
    expect(modalElement.className).toContain(styles.sharePopup);
    expect(modalElement.className).not.toContain(styles.hidden);
  });
});