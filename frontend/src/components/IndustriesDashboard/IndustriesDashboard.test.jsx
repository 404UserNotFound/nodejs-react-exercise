import { render, screen } from '@testing-library/react';
import IndustriesDashboard from './IndustriesDashboard';
import {mockIndustriesData} from "../../test/testData.js";

vi.mock('../IndustryCard/IndustryCard.jsx', () => ({
    default: ({ industry }) => <div data-testid="industry-card">{industry.name}</div>,
}));

describe('IndustriesDashboard', () => {
    it('renders the correct number of industries, companies, and jobs', () => {
        render(<IndustriesDashboard industriesData={mockIndustriesData} />);
        expect(screen.getByText('2')).toBeInTheDocument(); // Industries
        expect(screen.getByText('3')).toBeInTheDocument(); // Companies
        expect(screen.getByText('10')).toBeInTheDocument(); // Total Jobs
    });

    it('renders an IndustryCard for each industry', () => {
        render(<IndustriesDashboard industriesData={mockIndustriesData} />);
        const cards = screen.getAllByTestId('industry-card');
        expect(cards).toHaveLength(2);
        expect(cards[0]).toHaveTextContent('Tech');
        expect(cards[1]).toHaveTextContent('Finance');
    });
});