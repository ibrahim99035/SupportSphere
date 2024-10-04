const Document = require('../models/Document');

// Create a new document
exports.createDocument = async (req, res) => {
  try {
    const newDocument = new Document({
      problem: req.body.problem,
      moderator: req.user._id, // Assuming req.user contains the authenticated moderator's ID
      content: req.body.content,
    });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(500).json({ message: 'Error creating document' });
  }
};

// Get all documents
exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find().populate('problem moderator', 'description name');
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents' });
  }
};

// Get a single document by ID
exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id).populate('problem moderator', 'description name');
    res.json(document);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching document' });
  }
};

// Update a document
exports.updateDocument = async (req, res) => {
  try {
    const updatedDocument = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDocument);
  } catch (error) {
    res.status(500).json({ message: 'Error updating document' });
  }
};

// Delete a document
exports.deleteDocument = async (req, res) => {
  try {
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    if (!deletedDocument) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting document' });
  }
};

// Update document status
exports.updateDocumentStatus = async (req, res) => {
  try {
    const { status } = req.body; // Get the new status from the request body
    const validStatuses = ['in progress', 'done'];
    
    // Check if the provided status is valid
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedDocument = await Document.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true }
    );

    if (!updatedDocument) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.json({ message: 'Document status updated successfully', document: updatedDocument });
  } catch (error) {
    res.status(500).json({ message: 'Error updating document status' });
  }
};

// Get documents by status
exports.getDocumentsByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    const validStatuses = ['in progress', 'done'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const documents = await Document.find({ status }).populate('problem moderator', 'description name');
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching documents by status' });
  }
};