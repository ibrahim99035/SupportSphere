const Offer = require('../models/Offer');

// Workshop creates an offer based on a document
exports.createOffer = async (req, res) => {
  try {
    const newOffer = new Offer({
      document: req.body.documentId,
      workshop: req.user._id, // Workshop user ID
      offerDetails: req.body.offerDetails,
    });
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating offer' });
  }
};

// Get all offers for a specific document
exports.getOffersByDocument = async (req, res) => {
  try {
    const offers = await Offer.find({ document: req.params.documentId })
      .populate('workshop', 'name contactInfo');
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching offers' });
  }
};

// Get all offers by workshop
exports.getOffersByWorkshop = async (req, res) => {
  try {
    const offers = await Offer.find({ workshop: req.params.workshopId })
      .populate('document', 'details'); // Assuming 'details' is a field in the document model
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching offers' });
  }
};

// Get all offers (for admins and moderators)
exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find().populate('workshop', 'name contactInfo');
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching offers' });
  }
};

// Get a specific offer by ID
exports.getOfferById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id)
      .populate('workshop', 'name contactInfo');
    if (!offer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.json(offer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching offer' });
  }
};

// Update an offer by ID
exports.updateOffer = async (req, res) => {
  try {
    const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.json(updatedOffer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating offer' });
  }
};

// Delete an offer by ID
exports.deleteOffer = async (req, res) => {
  try {
    const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting offer' });
  }
};

// Update offer status
exports.updateOfferStatus = async (req, res) => {
  try {
    const { status } = req.body; // Get the new status from the request body
    const validStatuses = ['buffering', 'accepted', 'denied'];

    // Check if the provided status is valid
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedOffer = await Offer.findByIdAndUpdate(
      req.params.id,
      { status: status },
      { new: true }
    );

    if (!updatedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }

    res.json({ message: 'Offer status updated successfully', offer: updatedOffer });
  } catch (error) {
    res.status(500).json({ message: 'Error updating offer status' });
  }
};