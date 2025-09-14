const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB if MONGO_URI is set
connectDB()
  .then(() => {
    console.log('Database connection attempted');
  })
  .catch(error => {
    console.log('MongoDB connection error. Using local data only:', error.message);
  });

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/coldstorage', require('./routes/coldStorageRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/standards', require('./routes/standardsRoutes'));
app.use('/api/quality', require('./routes/qualityRoutes'));
app.use('/api/insights', require('./routes/insightsRoutes'));
app.use('/api/farmers', require('./routes/farmerRoutes'));

// Welcome route
app.get('/', (req, res) => {
  res.send('Farmigo API is running...');
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
