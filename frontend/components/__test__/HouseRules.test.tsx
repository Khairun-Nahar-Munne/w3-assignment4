import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HouseRules from '@/components/HouseRules';

// Mock FontAwesomeIcon since we don't need to test the actual icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />
}));

describe('HouseRules Component', () => {
  beforeEach(() => {
    render(<HouseRules />);
  });

  describe('House Rules Section', () => {
    it('renders the House Rules heading', () => {
      expect(screen.getByText('House Rules')).toBeInTheDocument();
    });

    it('displays check-in and check-out times', () => {
      expect(screen.getByText('Check in after 3:00 PM')).toBeInTheDocument();
      expect(screen.getByText('Check out before 11.00 AM')).toBeInTheDocument();
    });

    it('shows minimum age requirement', () => {
      expect(screen.getByText('Minimum age to rent: 25')).toBeInTheDocument();
    });

    it('renders all house rules with correct titles', () => {
      const rulesTitles = ['Children', 'Events', 'Pets', 'Smoking'];
      rulesTitles.forEach(title => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });
    });

    it('displays all rule descriptions', () => {
      const ruleDescriptions = [
        'Children allowed: ages 0-17',
        'No events allowed',
        'No pets allowed',
        'Smoking is not permitted'
      ];
      ruleDescriptions.forEach(description => {
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    });
  });

  describe('Damage and Incidents Section', () => {
    it('renders the Damage and Incidents heading', () => {
      expect(screen.getByText('Damage and Incidents')).toBeInTheDocument();
    });

    it('displays damage policy text', () => {
      expect(screen.getByText(/You will be responsible for any damage/)).toBeInTheDocument();
    });
  });

  describe('Cancellation Section', () => {
    it('renders the Cancellation heading', () => {
      expect(screen.getByText('Cancellation')).toBeInTheDocument();
    });

    it('displays refund status labels', () => {
      const refundLabels = ['Full Refund', 'No Refund'];
      refundLabels.forEach(label => {
        // Using getAllByText because the labels appear multiple times due to responsive design
        expect(screen.getAllByText(label).length).toBeGreaterThan(0);
      });
    });

    it('shows timeline dates', () => {
      expect(screen.getAllByText('Today').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Nov 4').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Check-in').length).toBeGreaterThan(0);
    });

    it('displays cancellation policy details', () => {
      expect(screen.getByText(/Cancel your reservation before Nov 4 at 11:59 PM/)).toBeInTheDocument();
      expect(screen.getByText(/After that, you won't get a refund./)).toBeInTheDocument();
    });
  });

  describe('Important Information Section', () => {
    it('renders the Important Information heading', () => {
      expect(screen.getByText('Important Information')).toBeInTheDocument();
    });

    it('displays "You need to know" subheading', () => {
      expect(screen.getByText('You need to know')).toBeInTheDocument();
    });

    it('shows all important information items', () => {
      const importantItems = [
        'Extra-person charges may apply and vary depending on property policy',
        'Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges',
        'Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed',
        'Onsite parties or group events are strictly prohibited',
        'Host has indicated there is a carbon monoxide detector on the property',
        'Host has indicated there is a smoke detector on the property',
        'Safety features at this property include a fire extinguisher and a first aid kit'
      ];

      importantItems.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  describe('FAQ Section', () => {
    it('renders the FAQ heading', () => {
      expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    });

    it('displays all FAQ questions', () => {
      const questions = [
        'Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?',
        'What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?',
        'What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?',
        'Where is Juneau Vacation Home: Stunning View + Beach Access located?'
      ];

      questions.forEach(question => {
        expect(screen.getByText(question)).toBeInTheDocument();
      });
    });
  });

  describe('Responsive Design', () => {
    it('renders FontAwesome icons', () => {
      const icons = screen.getAllByTestId('mock-icon');
      // 4 rule icons + 4 FAQ chevron icons = 8 total icons
      expect(icons).toHaveLength(8);
    });
  });
});