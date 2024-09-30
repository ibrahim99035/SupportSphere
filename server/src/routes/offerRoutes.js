const express = require('express');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const {
  createOffer,
  getOffersByDocument,
  getOffersByWorkshop,
  getOffers,
  getOfferById,
  updateOffer,
  deleteOffer,
  updateOfferStatus
} = require('../controllers/offerController');

const router = express.Router();

// Workshop creates an offer
router.post('/', protect, authorizeRoles(['admin', 'moderator', 'workshop']), createOffer);

// Get all offers (admin and moderators)
router.get('/', protect, authorizeRoles(['admin', 'moderator']), getOffers);

// Get offers for a specific document
router.get('/document/:documentId', protect, authorizeRoles(['admin', 'moderator', 'workshop']), getOffersByDocument);

// Get offers by workshop
router.get('/workshop/:workshopId', protect, authorizeRoles(['admin', 'moderator', 'workshop']), getOffersByWorkshop);

// Get a specific offer by ID
router.get('/:id', protect, authorizeRoles(['admin', 'moderator']), getOfferById);

// Update an offer by ID
router.put('/:id', protect, authorizeRoles(['admin', 'moderator', 'workshop']), updateOffer);

// Delete an offer by ID
router.delete('/:id', protect, authorizeRoles(['admin', 'workshop']), deleteOffer);

router.put('/:id', protect, updateOfferStatus);

module.exports = router;