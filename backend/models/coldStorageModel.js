const mongoose = require('mongoose');

const coldStorageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number, // in metric tons
      required: true,
    },
    type: {
      type: String,
      enum: ['Multi-commodity', 'Single-commodity', 'Controlled Atmosphere'],
      required: true,
    },
    commodities: [
      {
        type: String,
      },
    ],
    address: {
      street: String,
      city: String,
      postalCode: String,
      landmark: String,
    },
    contact: {
      name: String,
      phone: String,
      email: String,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
      },
    },
    projectCost: {
      type: Number,
    },
    grantAmount: {
      type: Number,
    },
    implementingAgency: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Operational', 'Under Construction', 'Planned'],
      default: 'Operational',
    },
    images: [
      {
        type: String,
      },
    ],
    availableSpace: {
      type: Number, // in metric tons
      default: 0,
    },
    rates: {
      daily: Number,
      weekly: Number,
      monthly: Number,
      quarterly: Number,
      yearly: Number,
    },
    features: [
      {
        type: String,
      },
    ],
    certifications: [
      {
        type: String,
      },
    ],
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Add index for geospatial queries
coldStorageSchema.index({ location: '2dsphere' });

const ColdStorage = mongoose.model('ColdStorage', coldStorageSchema);

module.exports = ColdStorage;
