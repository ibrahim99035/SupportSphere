const express = require('express'); 
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { 
    createDeal, 
    getDeals, 
    getDealById, 
    addOffersToDeal,
    updateWorkshopForDeal,
    addChosenOfferToDeal,
    updateDealStatus,
    getDealsByModerator,
    getDealsByCustomer,
    getDealsByWorkshop,
} = require('../controllers/dealController');

const router = express.Router();

router.post('/', protect, createDeal); // Create a deal
router.get('/', protect, getDeals); // Get all deals
router.get('/:id', protect, getDealById); // Get specific deal

// Route for adding offers to a deal
router.put('/:id/add-offers', protect, authorizeRoles(['admin', 'moderator', 'workshop']), addOffersToDeal); // Add offers to a specific deal

// Route for updating the workshop for a deal
router.put('/:id/update-workshop', protect, authorizeRoles(['admin', 'customer']),  updateWorkshopForDeal); // Update workshop for a specific deal

// Route for adding the chosen offer to a deal
router.put('/:id/add-chosen-offer', protect, authorizeRoles(['admin', 'customer']),  addChosenOfferToDeal); // Add the chosen offer to a specific deal

// Route for updating the deal status
router.put('/:id/update-status', protect, authorizeRoles(['admin', 'moderator', 'customer']),  updateDealStatus); // Update the status of a specific deal

// Route for getting deals by moderator
router.get('/moderator', protect, getDealsByModerator); // Get all deals for the logged-in moderator

// Route for getting deals by customer
router.get('/customer', protect, getDealsByCustomer); // Get all deals for the logged-in customer

// Route for getting deals by workshop
router.get('/workshop', protect, getDealsByWorkshop); // Get all deals for the logged-in workshop


module.exports = router;