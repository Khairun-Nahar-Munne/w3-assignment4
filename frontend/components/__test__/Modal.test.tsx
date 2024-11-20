import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '@/components/Modal';

// Mock the CSS module
jest.mock('@/styles/header.module.css', () => ({
  'modal-overlay': 'modal-overlay',
  'modal': 'modal',
  'modal-header': 'modal-header',
  'close-btn': 'close-btn',
  'warning-message': 'warning-message',
  'warning-icon': 'warning-icon',
  'modal-description': 'modal-description',
  'nav-form-group': 'nav-form-group',
  'nav-save-btn': 'nav-save-btn'
}));

describe('Modal Component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    selectedRegion: 'US',
    onRegionChange: jest.fn(),
    regionNames: {
      'US': 'United States',
      'UK': 'United Kingdom',
      'DE': 'Germany'
    },
    regionCurrencyMap: {
      'US': 'USD',
      'UK': 'GBP',
      'DE': 'EUR'
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when isOpen is false', () => {
    const { container } = render(<Modal {...defaultProps} isOpen={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders modal content when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Display settings')).toBeInTheDocument();
    expect(screen.getByText(/Changing your region could change your rewards program/)).toBeInTheDocument();
  });

  it('calls onClose when clicking the close button', () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: '×' });
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking the overlay', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const overlay = container.querySelector('.modal-overlay');
    expect(overlay).not.toBeNull();
    fireEvent.click(overlay!);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking the modal content', () => {
    const { container } = render(<Modal {...defaultProps} />);
    const modalContent = container.querySelector('.modal');
    expect(modalContent).not.toBeNull();
    fireEvent.click(modalContent!);
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it('updates region selection and currency when changing region', async () => {
    render(<Modal {...defaultProps} />);
    
    const regionSelect = screen.getByLabelText('Region');
    const currencySelect = screen.getByLabelText('Currency');
    
    // Initial values
    expect(regionSelect).toHaveValue('US');
    expect(currencySelect).toHaveValue('USD');
    
    // Change region to UK
    await userEvent.selectOptions(regionSelect, 'UK');
    expect(currencySelect).toHaveValue('GBP');
  });

  it('calls onRegionChange with new region when saving', async () => {
    render(<Modal {...defaultProps} />);
    
    const regionSelect = screen.getByLabelText('Region');
    await userEvent.selectOptions(regionSelect, 'UK');
    
    const saveButton = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(saveButton);
    
    expect(defaultProps.onRegionChange).toHaveBeenCalledWith('UK');
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('renders all region options', () => {
    render(<Modal {...defaultProps} />);
    const regionSelect = screen.getByLabelText('Region');
    
    expect(regionSelect).toContainElement(screen.getByText('United States'));
    expect(regionSelect).toContainElement(screen.getByText('United Kingdom'));
    expect(regionSelect).toContainElement(screen.getByText('Germany'));
  });

  it('disables the currency select', () => {
    render(<Modal {...defaultProps} />);
    const currencySelect = screen.getByLabelText('Currency');
    expect(currencySelect).toBeDisabled();
  });

  it('updates local state when props change', () => {
    const { rerender } = render(<Modal {...defaultProps} />);
    
    // Re-render with different selected region
    rerender(<Modal {...defaultProps} selectedRegion="UK" />);
    
    const regionSelect = screen.getByLabelText('Region');
    const currencySelect = screen.getByLabelText('Currency');
    
    expect(regionSelect).toHaveValue('UK');
    expect(currencySelect).toHaveValue('GBP');
  });
});