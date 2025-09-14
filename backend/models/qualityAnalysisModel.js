const mongoose = require('mongoose');

const qualityAnalysisSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    originalImage: {
      type: String,
      required: true,
    },
    processedImage: {
      type: String,
    },
    productType: {
      type: String,
      required: true,
      enum: ['Apple', 'Banana', 'Tomato', 'Potato', 'Orange', 'Mango', 'Other'],
    },
    qualityScore: {
      type: Number,
      required: true,
      default: 0,
    },
    freshness: {
      score: Number,
      details: String,
    },
    color: {
      score: Number,
      details: String,
    },
    texture: {
      score: Number,
      details: String,
    },
    size: {
      score: Number,
      details: String,
    },
    defects: {
      score: Number,
      details: String,
      detectedDefects: [String],
    },
    ripeness: {
      score: Number,
      details: String,
    },
    modelVersion: {
      type: String,
    },
    analysisDate: {
      type: Date,
      default: Date.now,
    },
    recommendations: [String],
  },
  {
    timestamps: true,
  }
);

const QualityAnalysis = mongoose.model('QualityAnalysis', qualityAnalysisSchema);

module.exports = QualityAnalysis;
