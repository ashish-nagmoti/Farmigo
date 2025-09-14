# Farmigo

A comprehensive platform connecting farmers, consumers, and cold storage facilities.

## Features

- **Cold Storage Insights**: A central platform listing all cold storage facilities in India with government data integration
- **Standards and Safety Awareness**: Information about food safety standards and regulations
- **Farmer-to-Consumer Connection**: Direct marketplace connecting farmers with consumers
- **ML-based Food Quality Detection**: Computer vision system for assessing the quality of vegetables and fruits

## Tech Stack

- **Frontend**: React.js, Redux, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ML Components**: TensorFlow.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install backend dependencies
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables
   - Create `.env` files in both backend and frontend directories based on the provided examples

5. Run the application
   - Backend: `npm run dev` (from the backend directory)
   - Frontend: `npm start` (from the frontend directory)

## Project Structure

```
farmigo/
├── backend/           # Node.js/Express backend
│   ├── config/        # Configuration files
│   ├── controllers/   # Route controllers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── utils/         # Utility functions
├── frontend/          # React frontend
│   ├── public/        # Static files
│   └── src/           # React source code
│       ├── components/# Reusable components
│       ├── pages/     # Page components
│       ├── services/  # API service calls
│       ├── assets/    # Images, fonts, etc.
│       └── utils/     # Utility functions
└── ml-models/         # Machine learning models for food quality detection
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
