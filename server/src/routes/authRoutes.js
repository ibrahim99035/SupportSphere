const express = require('express');
const { 
        registerUser, 
        loginUser, 
        activateEmail, 
        getCurrentUser, 
        updatePassword, 
        forgotPassword, 
        resetPassword,
        updateUser,
        updateWorkshopInfo
    } = require('../controllers/authController');

const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/activate-email', activateEmail);
router.get('/me', protect, getCurrentUser);
router.put('/update-password', protect, updatePassword);
router.post('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);

router.put('/workshop-data/:userId', protect, authorizeRoles('admin', 'workshop'), updateWorkshopInfo);

router.put('/update-profile', protect, updateUser);

module.exports = router;