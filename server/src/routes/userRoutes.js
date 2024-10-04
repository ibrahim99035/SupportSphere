const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { getAllUsers, 
        getUserById,
        deactivateUser,  
        deleteUser, 
        approveUser,
        getCustomers,
        getAdmins,
        getModerators,
        getWorkshops,
        getUnapprovedUsers,
} = require('../controllers/adminController');

const router = express.Router();

router.get('/users', protect, authorizeRoles('admin'), getAllUsers); // Admin can get all users
router.get('/user/:id', protect, authorizeRoles('admin'), getUserById); // Admin can get a user by ID
router.put('/user/:id/deactivate', protect, authorizeRoles('admin'), deactivateUser);
router.delete('/user/:id/delete', protect, authorizeRoles('admin'), deleteUser); // Admin can delete user
router.put('/user/:id/approve', protect, authorizeRoles('admin'), approveUser); // Admin can approve user

// Get all customers
router.get('/users/customers', protect, authorizeRoles('admin'), getCustomers);

// Get all admins
router.get('/users/admins', protect, authorizeRoles('admin'), getAdmins);

// Get all moderators
router.get('/users/moderators', protect, authorizeRoles('admin'), getModerators);

// Get all workshops
router.get('/users/workshops', protect, authorizeRoles('admin'), getWorkshops);

// Get all unapproved users
router.get('/users/unapproved', protect, authorizeRoles('admin'), getUnapprovedUsers);

module.exports = router;