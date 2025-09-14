const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Add a flag to indicate if MongoDB is connected
let isMongoConnected = false;

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log('No MongoDB URI provided.');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });

    isMongoConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    isMongoConnected = false;
    // Don't throw, just return to allow the app to function without MongoDB
  }
};

// Export the connection status for other modules to check
module.exports = { 
  connectDB,
  isMongoConnected: () => isMongoConnected 
};
