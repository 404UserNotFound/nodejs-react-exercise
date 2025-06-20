import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

describe('Loader', () => {
    it('renders without crashing', () => {
        render(<Loader />);
    });

    it('displays loading text', () => {
        render(<Loader />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
});