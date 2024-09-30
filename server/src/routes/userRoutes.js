const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { getAllUsers, 
        getUserById,
        deactivateUser,  
        deleteUser, 
        approveUser } = require('../controllers/adminController');

const router = express.Router();

router.get('/', protect, authorizeRoles('admin'), getAllUsers); // Admin can get all users
router.get('/:id', protect, authorizeRoles('admin'), getUserById); // Admin can get a user by ID
router.put('/:id', protect, authorizeRoles('admin'), deactivateUser);
router.delete('/:id', protect, authorizeRoles('admin'), deleteUser); // Admin can delete user
router.put('/:id/approve', protect, authorizeRoles('admin'), approveUser); // Admin can approve user

module.exports = router;