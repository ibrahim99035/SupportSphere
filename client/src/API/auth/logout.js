// Log out a user
export const logoutUser = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
};