import { render, screen, fireEvent } from '@testing-library/react';
import IndustryCardCarousel from './IndustryCardCarousel';
import { industryCardCarouselProps } from '../../test/testData.js';

describe('IndustryCardCarousel', () => {
    it('renders Prev and Next buttons', () => {
        render(<IndustryCardCarousel {...industryCardCarouselProps} />);
        expect(screen.getByRole('button', { name: '‹' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '›' })).toBeInTheDocument();
    });

    it('disables Prev button when canGoBack is false', () => {
        render(<IndustryCardCarousel {...industryCardCarouselProps} canGoBack={false} />);
        expect(screen.getByRole('button', { name: '‹' })).toBeDisabled();
    });

    it('disables Next button when canGoForward is false', () => {
        render(<IndustryCardCarousel {...industryCardCarouselProps} canGoForward={false} />);
        expect(screen.getByRole('button', { name: '›' })).toBeDisabled();
    });

    it('calls handlePrevious when Prev is clicked', () => {
        render(<IndustryCardCarousel {...industryCardCarouselProps} canGoBack={true} />);
        fireEvent.click(screen.getByRole('button', { name: '‹' }));
        expect(industryCardCarouselProps.handlePrevious).toHaveBeenCalled();
    });

    it('calls handleNext when Next is clicked', () => {
        render(<IndustryCardCarousel {...industryCardCarouselProps} />);
        fireEvent.click(screen.getByRole('button', { name: '›' }));
        expect(industryCardCarouselProps.handleNext).toHaveBeenCalled();
    });

    it('shows the correct page indicator', () => {
        render(<IndustryCardCarousel {...industryCardCarouselProps} currentPage={1} totalPages={4} />);
        expect(screen.getByText('2 of 4')).toBeInTheDocument();
    });
});