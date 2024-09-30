const express = require('express'); 
const { protect } = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/roleMiddleware');
const { 
    createDocument,
    getDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
    updateDocumentStatus,
} = require('../controllers/documentController');

const router = express.Router();

// Route for creating a new document
router.post('/', protect, authorizeRoles(['admin', 'moderator']), createDocument);

// Route for getting all documents
router.get('/', protect, authorizeRoles(['admin', 'moderator', 'workshop']), getDocuments);

// Route for getting a single document by ID
router.get('/:id', protect, authorizeRoles(['admin', 'moderator', 'workshop']), getDocumentById);

// Route for updating a document
router.put('/:id', protect, authorizeRoles(['admin', 'moderator']), updateDocument);

// Route for deleting a document
router.delete('/:id', protect, authorizeRoles(['admin', 'moderator']), deleteDocument);

// Route for updating document status
router.put('/:id/status', protect, authorizeRoles(['admin', 'moderator']), updateDocumentStatus);

module.exports = router;