export const mockIndustriesData = [
    {
        id: 1,
        name: 'Tech',
        companies: [
            { id: 1, name: 'Alpha', total_jobs_available: 5 },
            { id: 2, name: 'Beta', total_jobs_available: 3 },
        ],
    },
    {
        id: 2,
        name: 'Finance',
        companies: [
            { id: 3, name: 'Gamma', total_jobs_available: 2 },
        ],
    },
];

export const mockCompany = {
    name: 'Test Company', images: {'32x32': 'test-logo.png'}, total_jobs_available: 5,
};

export const mockIndustry = {
    name: 'Tech',
    companies: [
        { uuid: '1', name: 'Alpha' },
        { uuid: '2', name: 'Beta' },
        { uuid: '3', name: 'Gamma' },
    ],
};

export const industryCardCarouselProps = {
    canGoBack: false,
    canGoForward: true,
    handlePrevious: vi.fn(),
    handleNext: vi.fn(),
    currentPage: 0,
    totalPages: 3,
};