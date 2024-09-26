const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./src/config/db');

const { errorHandler } = require('./src/middleware/errorHandler');
const { logger } = require('./src/middleware/logger'); 
const { notFound } = require('./src/middleware/notFound');

// Import Routes


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(logger); // Add the custom logger middleware
app.use(express.json({ limit: '50mb' })); // For handling JSON and large data (like base64 images)
app.use(cors()); // Enable Cross-Origin Resource Sharing 
app.use(morgan('dev')); // HTTP request logger for development

// Routes


// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});