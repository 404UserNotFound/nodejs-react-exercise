import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
    it('renders the error title', () => {
        render(<ErrorMessage message="Something went wrong" />);
        expect(screen.getByText('Error loading companies')).toBeInTheDocument();
    });

    it('renders the provided error message', () => {
        render(<ErrorMessage message="Network error" />);
        expect(screen.getByText('Network error')).toBeInTheDocument();
    });

    it('renders the server running hint', () => {
        render(<ErrorMessage message="Any error" />);
        expect(
            screen.getByText(/Make sure your Express server is running/i)
        ).toBeInTheDocument();
    });
});