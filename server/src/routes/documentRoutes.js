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
    getDocumentsByStatus,
} = require('../controllers/documentController');

const router = express.Router();

// Route for creating a new document
router.post('/create', protect, authorizeRoles('admin', 'moderator'), createDocument);

// Route for getting all documents
router.get('/retrieve-all', protect, authorizeRoles('admin', 'moderator', 'workshop'), getDocuments);

// Route for getting a single document by ID
router.get('/document/:id', protect, authorizeRoles('admin', 'moderator', 'workshop'), getDocumentById);

// Route for updating a document
router.put('/document/:id/update', protect, authorizeRoles('admin', 'moderator'), updateDocument);

// Route for deleting a document
router.delete('/document/:id/delete', protect, authorizeRoles('admin', 'moderator'), deleteDocument);

// Route for updating document status
router.put('/document/:id/status/update', protect, authorizeRoles('admin', 'moderator'), updateDocumentStatus);

// Route for retrieve documents by status
router.put('/retrieve/status', protect, authorizeRoles('admin', 'moderator'), getDocumentsByStatus);

module.exports = router;