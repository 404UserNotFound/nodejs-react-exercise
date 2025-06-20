import { render, screen, fireEvent } from '@testing-library/react';
import IndustryCard from './IndustryCard';
import {mockIndustry} from "../../test/testData.js";

vi.mock('../CompanyListItem/CompanyListItem.jsx', () => ({
    default: ({ company }) => <div data-testid="company-list-item">{company.name}</div>,
}));
vi.mock('../IndustryCardCarousel/IndustryCardCarousel.jsx', () => ({
    default: (props) => (
        <div>
            <button
                data-testid="prev-btn"
                disabled={!props.canGoBack}
                onClick={props.handlePrevious}
            >
                Prev
            </button>
            <button
                data-testid="next-btn"
                disabled={!props.canGoForward}
                onClick={props.handleNext}
            >
                Next
            </button>
            <span data-testid="page-indicator">
        {props.currentPage + 1} / {props.totalPages}
      </span>
        </div>
    ),
}));

vi.mock('../../constants.js', () => ({
    COMPANIES_PER_PAGE: 2,
}));

describe('IndustryCard', () => {
    it('renders industry name and company count', () => {
        render(<IndustryCard industry={mockIndustry} />);
        expect(screen.getByText('Tech')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('renders only companies for the current page', () => {
        render(<IndustryCard industry={mockIndustry} />);
        const items = screen.getAllByTestId('company-list-item');
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('Alpha');
        expect(items[1]).toHaveTextContent('Beta');
    });

    it('navigates to next and previous pages', () => {
        render(<IndustryCard industry={mockIndustry} />);
        fireEvent.click(screen.getByTestId('next-btn'));
        const items = screen.getAllByTestId('company-list-item');
        expect(items).toHaveLength(1);
        expect(items[0]).toHaveTextContent('Gamma');
        fireEvent.click(screen.getByTestId('prev-btn'));
        const itemsBack = screen.getAllByTestId('company-list-item');
        expect(itemsBack).toHaveLength(2);
        expect(itemsBack[0]).toHaveTextContent('Alpha');
    });

    it('disables prev button on first page and next button on last page', () => {
        render(<IndustryCard industry={mockIndustry} />);
        expect(screen.getByTestId('prev-btn')).toBeDisabled();
        fireEvent.click(screen.getByTestId('next-btn'));
        expect(screen.getByTestId('next-btn')).toBeDisabled();
    });
});