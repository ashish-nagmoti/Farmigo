const mongoose = require('mongoose');

const standardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Food Safety', 'Quality Standards', 'Storage Guidelines', 'Packaging Standards', 'Transportation Guidelines', 'Certification'],
    },
    description: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    issuingAuthority: {
      type: String,
      required: true,
    },
    referenceNumber: {
      type: String,
    },
    issueDate: {
      type: Date,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    applicableTo: [
      {
        type: String,
        enum: ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'All'],
      },
    ],
    attachments: [
      {
        name: String,
        fileUrl: String,
        fileType: String,
      },
    ],
    relatedLinks: [
      {
        title: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Standard = mongoose.model('Standard', standardSchema);

module.exports = Standard;
