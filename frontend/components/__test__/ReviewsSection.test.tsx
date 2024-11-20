import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsSection from '@/components/ReviewsSection';

// Mock FontAwesome to avoid issues with icon rendering in tests
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('ReviewsSection', () => {
  const mockReviews = [
    {
      rating: "10/10 Excellent",
      text: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the...",
      author: "Kyle G.",
      date: "Sep 25, 2024"
    },
    {
      rating: "10/10 Excellent",
      text: "The photos are just as the pictures and description state. Nice quiet area and great view of the...",
      author: "Cindy B.",
      date: "Sep 23, 2024"
    }
  ];

  it('renders the overall rating section correctly', () => {
    render(<ReviewsSection />);
    
    expect(screen.getByText('9.8/10')).toBeInTheDocument();
    expect(screen.getByText('Exceptional')).toBeInTheDocument();
    expect(screen.getByText('24 reviews')).toBeInTheDocument();
    expect(screen.getByText('Reviews are verified unless labeled otherwise')).toBeInTheDocument();
  });

  it('renders the Recent Reviews header', () => {
    render(<ReviewsSection />);
    expect(screen.getByText('Recent Reviews')).toBeInTheDocument();
  });

  it('renders the first review card with correct content', () => {
    render(<ReviewsSection />);
    
    const ratings = screen.getAllByText('10/10 Excellent');
    expect(ratings[0]).toBeInTheDocument();
    
    const firstReviewText = screen.getByText(mockReviews[0].text);
    expect(firstReviewText).toBeInTheDocument();
    expect(screen.getByText('Kyle G.')).toBeInTheDocument();
    expect(screen.getByText('Sep 25, 2024')).toBeInTheDocument();
  });

  it('renders the second review card with correct content', () => {
    render(<ReviewsSection />);
    
    const secondReviewText = screen.getByText(mockReviews[1].text);
    expect(secondReviewText).toBeInTheDocument();
    expect(screen.getByText('Cindy B.')).toBeInTheDocument();
    expect(screen.getByText('Sep 23, 2024')).toBeInTheDocument();
  });

  it('renders correct number of review cards', () => {
    render(<ReviewsSection />);
    const reviewCards = screen.getAllByText(/Read more/i);
    expect(reviewCards).toHaveLength(2);
  });

  it('renders See all reviews button with correct text', () => {
    render(<ReviewsSection />);
    const seeAllButton = screen.getByText('See all 24 reviews');
    expect(seeAllButton).toBeInTheDocument();
    expect(seeAllButton.tagName.toLowerCase()).toBe('a');
  });

  it('renders FontAwesome icons', () => {
    render(<ReviewsSection />);
    const icons = screen.getAllByTestId('mock-icon');
    expect(icons).toHaveLength(2); // One for info circle, one for arrow right
  });



  describe('accessibility', () => {
    it('renders links with hover states', () => {
      render(<ReviewsSection />);
      const readMoreLinks = screen.getAllByText('Read more');
      readMoreLinks.forEach(link => {
        expect(link).toHaveClass('hover:underline');
      });
    });

    it('ensures all links have href attributes', () => {
      render(<ReviewsSection />);
      const allLinks = screen.getAllByRole('link');
      allLinks.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });
});