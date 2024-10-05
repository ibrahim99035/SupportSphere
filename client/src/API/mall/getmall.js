const dotenv = require('dotenv');
dotenv.config();

BASE_URL = process.env.BASE_URL;

// Fetch a single mall by ID
export const fetchMallById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/malls/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'An error occurred');
        }
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};