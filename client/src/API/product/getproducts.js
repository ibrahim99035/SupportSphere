const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
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