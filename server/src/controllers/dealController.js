const Deal = require('../models/Deal');

// Create a deal when a customer chooses an offer
exports.createDeal = async (req, res) => {
  try {
    const newDeal = new Deal({
      problem: req.body.problemId,
      document: req.body.documentId,
      customer: req.user._id,
      moderator: req.body.moderatorId,
    });
    await newDeal.save();
    res.status(201).json(newDeal);
  } catch (error) {
    res.status(500).json({ message: `Error creating deal ${error}` });
  }
};

// Get all deals
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.find()
      .populate('customer', 'name email')
      .populate('moderator', 'name')
      .populate('workshop', 'name contactInfo')
      .populate('chosenOffer', 'offerDetails');
    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deals' });
  }
};

// Get a single deal by ID
exports.getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id)
      .populate('problem')          // Populate the related problem
      .populate('document')        // Populate the related document
      .populate('offers')          // Populate the offers made for this deal
      .populate('customer', 'name email') // Populate customer details
      .populate('moderator', 'name email') // Populate moderator details
      .populate('workshop', 'name email'); // Populate workshop details

    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }

    res.json(deal);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deal' });
  }
};

// Add offer IDs to a deal
exports.addOffersToDeal = async (req, res) => {
  try {
    const dealId = req.params.id; // Get dealId from the route params
    const { offers } = req.body; // Get offers from the request body
    const updatedDeal = await Deal.findByIdAndUpdate(
      dealId,
      { $addToSet: { offers: { $each: offers } } },
      { new: true }
    );
    res.json(updatedDeal);
  } catch (error) {
    res.status(500).json({ message: 'Error adding offers to deal' });
  }
};

// Update the workshop for a deal
exports.updateWorkshopForDeal = async (req, res) => {
  try {
    const { id } = req.params;
    const { workshopId } = req.body; // Assume workshopId is the ID of the chosen workshop
    const updatedDeal = await Deal.findByIdAndUpdate(
      id,
      { workshop: workshopId },
      { new: true }
    );
    res.json(updatedDeal);
  } catch (error) {
    res.status(500).json({ message: 'Error updating workshop for deal' });
  }
};

// Add the chosen offer to a deal
exports.addChosenOfferToDeal = async (req, res) => {
  try {
    const { id } = req.params; // Use 'id' instead of 'dealId'
    const { chosenOfferId } = req.body; // Extract chosenOfferId from the request body

    // Find the deal and update its chosenOffer field
    const updatedDeal = await Deal.findByIdAndUpdate(
      id,  // Use 'id' here, which is extracted from req.params
      { chosenOffer: chosenOfferId },
      { new: true }  // Return the updated deal
    );

    res.json(updatedDeal);  // Return the updated deal in the response
  } catch (error) {
    res.status(500).json({ message: 'Error adding chosen offer to deal', error });
  }
};

// Update the status of a deal
exports.updateDealStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Get the new status from the request body
    const validStatuses = ['started', 'finished'];

    // Check if the provided status is valid
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedDeal = await Deal.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );

    if (!updatedDeal) {
      return res.status(404).json({ message: 'Deal not found' });
    }

    res.json({ message: 'Deal status updated successfully', deal: updatedDeal });
  } catch (error) {
    res.status(500).json({ message: 'Error updating deal status' });
  }
};

// Get deals by moderator
exports.getDealsByModerator = async (req, res) => {
  try {
    const deals = await Deal.find({ moderator: req.user._id })
      .populate('problem')
      .populate('document')
      .populate('offers')
      .populate('customer', 'name email') // Populate customer details
      .populate('workshop', 'name email'); // Populate workshop details

    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deals for moderator' });
  }
};

// Get deals by customer
exports.getDealsByCustomer = async (req, res) => {
  try {
    const deals = await Deal.find({ customer: req.user._id })
      .populate('problem')
      .populate('document')
      .populate('offers')
      .populate('moderator', 'name email') // Populate moderator details
      .populate('workshop', 'name email'); // Populate workshop details

    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deals for customer' });
  }
};

// Get deals by workshop
exports.getDealsByWorkshop = async (req, res) => {
  try {
    const deals = await Deal.find({ workshop: req.user._id })
      .populate('problem')
      .populate('document')
      .populate('offers')
      .populate('customer', 'name email') // Populate customer details
      .populate('moderator', 'name email'); // Populate moderator details

    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deals for workshop' });
  }
};

// Get deals by user ID (customer, moderator, or workshop)
exports.getDealsByUserId = async (req, res) => {
  const { userId, role } = req.params; // Assuming role and userId are passed as route parameters
  let filter = {};

  try {
    // Build filter condition based on role
    switch (role) {
      case 'moderator':
        filter = { moderator: userId };
        break;
      case 'customer':
        filter = { customer: userId };
        break;
      case 'workshop':
        filter = { workshop: userId };
        break;
      default:
        return res.status(400).json({ message: 'Invalid role' });
    }

    const deals = await Deal.find(filter)
      .populate('problem')
      .populate('document')
      .populate('offers')
      .populate('customer', 'name email')  // Populate customer details
      .populate('moderator', 'name email') // Populate moderator details
      .populate('workshop', 'name email'); // Populate workshop details

    res.json(deals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deals for the user' });
  }
};