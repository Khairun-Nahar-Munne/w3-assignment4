import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionSearch from '@/components/QuestionSearch';

describe('QuestionSearch Component', () => {
  it('renders without crashing', () => {
    render(<QuestionSearch />);
  });

  it('displays the correct heading and beta badge', () => {
    render(<QuestionSearch />);
    
    expect(screen.getByText('Have a question?')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('displays the description text', () => {
    render(<QuestionSearch />);
    
    expect(screen.getByText('Get instant answers with AI powered search of property information and reviews.')).toBeInTheDocument();
  });



 

  it('renders search buttons', () => {
    render(<QuestionSearch />);
    
    const searchButtons = screen.getAllByRole('button');
    expect(searchButtons).toHaveLength(2);
  });


  it('renders input container with correct border styling', () => {
    const { container } = render(<QuestionSearch />);
    
    const inputContainer = container.querySelector('div > div:last-child > div:first-child');
    expect(inputContainer).toHaveClass('flex', 'rounded-lg', 'border-[3px]', 'border-gray-300');
  });

  it('has accessible search functionality', () => {
    render(<QuestionSearch />);
    
    const input = screen.getByPlaceholderText('Is there free parking?');
    expect(input).toHaveAttribute('type', 'text');
    
    const searchButtons = screen.getAllByRole('button');
    searchButtons.forEach(button => {
      expect(button).not.toBeDisabled();
    });
  });
});