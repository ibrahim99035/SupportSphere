const dotenv = require('dotenv');
dotenv.config();

BASE_URL = process.env.BASE_URL;

// Fetch a single product by ID
export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
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