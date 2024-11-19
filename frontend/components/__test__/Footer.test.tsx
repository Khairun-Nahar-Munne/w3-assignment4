// Footer.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders the "About the host" section', () => {
    render(<Footer />);
    const aboutHostHeading = screen.getByText('About the host');
    expect(aboutHostHeading).toBeInTheDocument();
  });

  it('renders the "Hosted by Evolve" section', () => {
    render(<Footer />);
    const hostedByText = screen.getByText('Hosted by Evolve');
    expect(hostedByText).toBeInTheDocument();
  });

  it('renders the languages list', () => {
    render(<Footer />);
    const languagesHeading = screen.getByText('Languages:');
    const languagesList = screen.getByText('English, French, German, Spanish');
    
    expect(languagesHeading).toBeInTheDocument();
    expect(languagesList).toBeInTheDocument();
  });

  it('renders the "Send a message" section', () => {
    render(<Footer />);
    const sendMessageHeading = screen.getByText('Send a message');
    expect(sendMessageHeading).toBeInTheDocument();
  });

  it('renders the "Contact Host" button', () => {
    render(<Footer />);
    const contactButton = screen.getByRole('button', { name: /Contact Host/i });
    expect(contactButton).toBeInTheDocument();
  });

  it('button has correct styles', () => {
    render(<Footer />);
    const contactButton = screen.getByRole('button', { name: /Contact Host/i });
    expect(contactButton).toHaveClass('text-[rgb(57,86,218)]');
    expect(contactButton).toHaveClass('bg-white');
    expect(contactButton).toHaveClass('border');
    expect(contactButton).toHaveClass('rounded-2xl');
  });
});
