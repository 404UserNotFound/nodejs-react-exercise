import { render, screen } from '@testing-library/react';
import IndustrySection from './IndustrySection';
import {mockIndustriesData} from "../../test/testData.js";

describe('IndustrySection', () => {
    it('renders an IndustryCard for each industry', () => {
        render(<IndustrySection industriesData={mockIndustriesData} />);
        expect(screen.getByText('Tech')).toBeInTheDocument();
        expect(screen.getByText('Finance')).toBeInTheDocument();
    });

    it('renders nothing if industries prop is empty', () => {
        render(<IndustrySection industries={[]} />);
        expect(screen.queryByTestId('industry-card')).not.toBeInTheDocument();
    });
});