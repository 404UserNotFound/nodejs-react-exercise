import React from 'react';

const ErrorMessage = ({ message }) => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
            <div className="text-red-600 text-xl mb-4">Error loading companies</div>
            <p className="text-gray-600">{message}</p>
            <p className="text-sm text-gray-500 mt-2">
                Make sure your Express server is running on http://localhost:3001
            </p>
        </div>
    </div>
);

export default ErrorMessage;
