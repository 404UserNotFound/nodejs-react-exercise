import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
    it('renders the page title', () => {
        render(<Layout>Test Child</Layout>);
        expect(screen.getByText(/companies by industry/i)).toBeInTheDocument();
    });

    it('renders the page subtitle', () => {
        render(<Layout>Test Child</Layout>);
        expect(screen.getByText(/explore companies across different industries/i)).toBeInTheDocument();
    });

    it('renders children', () => {
        render(<Layout><div>Test Child</div></Layout>);
        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });
});