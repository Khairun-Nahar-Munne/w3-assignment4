import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import '@testing-library/jest-dom';

jest.mock('@/components/Header', () => () => <div>Header</div>);
jest.mock('@/components/Banner', () => () => <div>Banner</div>);
jest.mock('@/components/Gallery', () => () => <div>Gallery</div>);
jest.mock('@/components/VacationListing', () => () => <div>VacationListing</div>);
jest.mock('@/components/RoomDetailsAndSpaces', () => () => <div>RoomDetailsAndSpaces</div>);
jest.mock('@/components/AboutProperty', () => () => <div>AboutProperty</div>);
jest.mock('@/components/QuestionSearch', () => () => <div>QuestionSearch</div>);
jest.mock('@/components/HouseRules', () => () => <div>HouseRules</div>);
jest.mock('@/components/ReviewsSection', () => () => <div>ReviewsSection</div>);
jest.mock('@/components/Footer', () => () => <div>Footer</div>);

describe('Home Page', () => {
  it('renders all components correctly', () => {
    render(<Home />);

    // Check if the components are rendered
    expect(screen.getByText(/Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Banner/i)).toBeInTheDocument();
    expect(screen.getByText(/Gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/VacationListing/i)).toBeInTheDocument();
    expect(screen.getByText(/RoomDetailsAndSpaces/i)).toBeInTheDocument();
    expect(screen.getByText(/AboutProperty/i)).toBeInTheDocument();
    expect(screen.getByText(/QuestionSearch/i)).toBeInTheDocument();
    expect(screen.getByText(/HouseRules/i)).toBeInTheDocument();
    expect(screen.getByText(/ReviewsSection/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });


});
