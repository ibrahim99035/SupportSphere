const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { 
    createProblem,
    getProblems,
    getProblemById,
    updateProblemStatus,
    assignModerator,
    deleteProblem,
    getProblemsByStatus,
    getProblemsByCustomer,
    getProblemsByModerator
} = require('../controllers/problemController');

const router = express.Router();

// Route for creating a new problem
router.post('/', protect, authorizeRoles(['admin', 'customer']), createProblem);

// Route for getting all problems (moderators can view)
router.get('/', protect, authorizeRoles(['admin', 'moderator', 'customer']), getProblems);

// Route for getting a single problem by ID
router.get('/:id', protect, authorizeRoles(['admin', 'moderator', 'customer']), getProblemById);

// Route for updating the status of a problem
router.put('/:id/status', protect, authorizeRoles(['admin', 'moderator']), updateProblemStatus);

// Route for assigning a moderator to a problem
router.put('/:id/assign', protect, authorizeRoles(['admin', 'moderator']), assignModerator);

// Route for deleting a problem
router.delete('/:id', protect, authorizeRoles('admin'), deleteProblem);

// Route for getting problems by status
router.get('/status/:status', protect, authorizeRoles(['admin', 'moderator']), getProblemsByStatus);

// Route for getting problems created by a specific customer
router.get('/customer/:id', protect, authorizeRoles(['admin', 'moderator', 'customer']), getProblemsByCustomer);

// Route for getting problems assigned to a specific moderator
router.get('/moderator/:id', protect, authorizeRoles(['admin', 'moderator']), getProblemsByModerator);

module.exports = router;