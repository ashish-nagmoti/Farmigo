const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Other'],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    priceUnit: {
      type: String,
      required: true,
      default: 'kg',
      enum: ['kg', 'piece', 'dozen', 'quintal', 'ton'],
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
        name: {
          type: String,
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
      },
    ],
    harvest: {
      date: Date,
      location: String,
    },
    organic: {
      type: Boolean,
      default: false,
    },
    qualityScore: {
      type: Number,
      default: 0,
    },
    qualityMetrics: {
      freshness: Number,
      color: Number,
      texture: Number,
      size: Number,
      defects: Number,
    },
    coldStorage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ColdStorage',
    },
    deliveryOptions: {
      selfPickup: {
        type: Boolean,
        default: true,
      },
      delivery: {
        type: Boolean,
        default: false,
      },
      deliveryRadius: {
        type: Number,
        default: 0,
      },
      deliveryCharge: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
