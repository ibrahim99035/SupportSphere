const Problem = require('../models/Problem');

// Create a problem from a customer
exports.createProblem = async (req, res) => {
  try {
    const newProblem = new Problem({
      customer: req.user._id, 
      description: req.body.description,
    });
    await newProblem.save();
    res.status(201).json(newProblem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating problem' });
  }
};

// Get all problems (moderators can view)
exports.getProblems = async (req, res) => {
  try {
    const problems = await Problem.find().populate('customer', 'name email');
    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problems' });
  }
};

// Get a single problem by ID
exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id).populate('customer', 'name email');
    res.json(problem);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problem' });
  }
};

// Update the status of a problem
exports.updateProblemStatus = async (req, res) => {
  try {
    const problemId = req.params.id; // Get the problem ID from the request parameters
    const { status } = req.body; // Get the new status from the request body

    // Check if the provided status is valid
    const validStatuses = ['not started', 'in progress', 'done'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const updatedProblem = await Problem.findByIdAndUpdate(
      problemId,
      { status: status },
      { new: true }
    );

    if (!updatedProblem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    res.json({ message: 'Problem status updated successfully', problem: updatedProblem });
  } catch (error) {
    res.status(500).json({ message: 'Error updating problem status' });
  }
};

// Assign a moderator to a problem
exports.assignModerator = async (req, res) => {
  try {
    const problemId = req.params.id; // Get the problem ID from the request parameters
    const { moderatorId } = req.body; // Get the moderator ID from the request body

    const updatedProblem = await Problem.findByIdAndUpdate(
      problemId,
      { moderator: moderatorId, status: 'in progress' },
      { new: true }
    );

    if (!updatedProblem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    res.json({ message: 'Moderator assigned successfully', problem: updatedProblem });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning moderator' });
  }
};

// Delete a problem
exports.deleteProblem = async (req, res) => {
  try {
    const problemId = req.params.id; // Get the problem ID from the request parameters

    const deletedProblem = await Problem.findByIdAndDelete(problemId);

    if (!deletedProblem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    res.json({ message: 'Problem deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting problem' });
  }
};

// Get problems by status
exports.getProblemsByStatus = async (req, res) => {
  try {
    const status = req.params.status; // Get the status from the request parameters
    const problems = await Problem.find({ status }).populate('customer', 'name email');

    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problems' });
  }
};

// Get problems created by a specific customer
exports.getProblemsByCustomer = async (req, res) => {
  try {
    const customerId = req.params.id; // Get the customer ID from the request parameters
    const problems = await Problem.find({ customer: customerId }).populate('customer', 'name email');

    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problems for customer' });
  }
};

// Get problems assigned to a specific moderator
exports.getProblemsByModerator = async (req, res) => {
  try {
    const moderatorId = req.params.id; // Get the moderator ID from the request parameters

    // Find problems where the moderator field matches the given ID
    const problems = await Problem.find({ moderator: moderatorId }).populate('customer', 'name email');

    // Check if any problems were found
    if (problems.length === 0) {
      return res.status(404).json({ message: 'No problems found for this moderator' });
    }

    res.json(problems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching problems for moderator' });
  }
};