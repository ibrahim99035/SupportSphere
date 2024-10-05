const dotenv = require('dotenv');
dotenv.config();

BASE_URL = process.env.BASE_URL;

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Registration failed');
        }
        return response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};