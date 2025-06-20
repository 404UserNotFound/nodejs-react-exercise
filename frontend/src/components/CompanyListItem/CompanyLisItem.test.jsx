import React from 'react';
import {render, screen} from '@testing-library/react';
import CompanyListItem from './CompanyListItem';
import '@testing-library/jest-dom';
import {mockCompany} from "../../test/testData.js";

describe('CompanyListItem', () => {
    it('renders company name', () => {
        render(<CompanyListItem company={mockCompany}/>);
        expect(screen.getByText('Test Company')).toBeInTheDocument();
    });

    it('renders company logo', () => {
        render(<CompanyListItem company={mockCompany}/>);
        const img = screen.getByAltText('Test Company logo');
        expect(img).toHaveAttribute('src', 'test-logo.png');
    });

    it('renders fallback logo if image is missing', () => {
        const companyNoLogo = {...mockCompany, images: {}};
        render(<CompanyListItem company={companyNoLogo}/>);
        const img = screen.getByAltText('Test Company logo');
        expect(img.src).toMatch(/MissingLogoPlaceholder\.png$/);
    });

    it('renders total jobs available', () => {
        render(<CompanyListItem company={mockCompany}/>);
        expect(screen.getByText('5')).toBeInTheDocument();
    });
});