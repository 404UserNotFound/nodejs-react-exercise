import React from 'react';

const Layout = ({ children }) => (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Companies by Industry</h1>
                <p className="text-gray-600">Explore companies across different industries</p>
            </div>
            {children}
        </div>
    </div>
);

export default Layout;
