const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const {
  createOffer,
  getOffersByDocument,
  getOffersByWorkshop,
  getOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
  updateOfferStatus,
  getOffersByStatus
} = require('../controllers/offerController');

const router = express.Router();

// Workshop creates an offer
router.post('/create', protect, authorizeRoles('admin', 'moderator', 'workshop'), createOffer);

// Get all offers (admin and moderators)
router.get('/retrieve-all', protect, authorizeRoles('admin', 'moderator'), getOffers);

// Get offers for a specific document
router.get('/document/:documentId', protect, authorizeRoles('admin', 'moderator', 'workshop'), getOffersByDocument);

// Get offers by workshop
router.get('/workshop/:workshopId', protect, authorizeRoles('admin', 'moderator', 'workshop'), getOffersByWorkshop);

// Get a specific offer by ID
router.get('/offer/:id', protect, authorizeRoles('admin', 'moderator'), getOfferById);

// Update an offer by ID
router.put('/offer/:id/update', protect, authorizeRoles('admin', 'moderator', 'workshop'), updateOffer);

// Delete an offer by ID
router.delete('/offer/:id/delete', protect, authorizeRoles('admin', 'workshop'), deleteOffer);

router.put('/offer/:id/status/update', protect, updateOfferStatus);

router.put('/retrieve/status', protect, getOffersByStatus);

module.exports = router;