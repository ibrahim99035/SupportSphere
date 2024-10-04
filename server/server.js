const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./src/config/db');

const { errorHandler } = require('./src/middleware/errorHandler');
const { logger } = require('./src/middleware/logger'); 
const { notFound } = require('./src/middleware/notFound');

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const dealRoutes = require('./src/routes/dealRoutes');
const documentRoutes = require('./src/routes/documentRoutes');
const offerRoutes = require('./src/routes/offerRoutes');
const problemRoutes = require('./src/routes/problemRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(logger); 
app.use(express.json({ limit: '50mb' })); 
app.use(cors()); 
app.use(morgan('dev')); 

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/deals', dealRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/admin-dashboard', userRoutes); 

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});