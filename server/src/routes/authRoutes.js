const express = require('express');
const { 
        registerUser, 
        loginUser, 
        activateEmail, 
        getCurrentUser, 
        updatePassword, 
        forgotPassword, 
        resetPassword 
    } = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/activate', activateEmail);
router.get('/me', protect, getCurrentUser);
router.put('/update-password', protect, updatePassword);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.put('/workshop-data', protect, authorizeRoles('workshop'), updateWorkshopInfo);

module.exports = router;