const ColdStorage = require('../models/coldStorageModel');

// @desc    Get all cold storage facilities
// @route   GET /api/coldstorage
// @access  Public
const getColdStorages = async (req, res) => {
  try {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
      ? {
          $or: [
            { name: { $regex: req.query.keyword, $options: 'i' } },
            { state: { $regex: req.query.keyword, $options: 'i' } },
            { district: { $regex: req.query.keyword, $options: 'i' } },
          ],
        }
      : {};

    // Filter by state
    if (req.query.state) {
      keyword.state = { $regex: req.query.state, $options: 'i' };
    }

    // Filter by district
    if (req.query.district) {
      keyword.district = { $regex: req.query.district, $options: 'i' };
    }

    // Filter by type
    if (req.query.type) {
      keyword.type = req.query.type;
    }

    // Filter by commodity
    if (req.query.commodity) {
      keyword.commodities = { $in: [req.query.commodity] };
    }

    // Filter by minimum capacity
    if (req.query.minCapacity) {
      keyword.capacity = { $gte: Number(req.query.minCapacity) };
    }

    // Filter by available space
    if (req.query.availableSpace) {
      keyword.availableSpace = { $gte: Number(req.query.availableSpace) };
    }

    const count = await ColdStorage.countDocuments(keyword);
    const coldStorages = await ColdStorage.find(keyword)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ createdAt: -1 });

    res.json({
      coldStorages,
      page,
      pages: Math.ceil(count / pageSize),
      total: count,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get cold storage by ID
// @route   GET /api/coldstorage/:id
// @access  Public
const getColdStorageById = async (req, res) => {
  try {
    const coldStorage = await ColdStorage.findById(req.params.id);

    if (coldStorage) {
      res.json(coldStorage);
    } else {
      res.status(404);
      throw new Error('Cold storage not found');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Create a cold storage
// @route   POST /api/coldstorage
// @access  Private/Broker
const createColdStorage = async (req, res) => {
  try {
    const {
      name,
      state,
      district,
      capacity,
      type,
      commodities,
      address,
      contact,
      location,
      projectCost,
      grantAmount,
      implementingAgency,
      status,
      availableSpace,
      rates,
      features,
      certifications,
    } = req.body;

    const coldStorage = new ColdStorage({
      name,
      owner: req.user._id,
      state,
      district,
      capacity,
      type,
      commodities: commodities || [],
      address,
      contact,
      location,
      projectCost,
      grantAmount,
      implementingAgency,
      status: status || 'Operational',
      availableSpace,
      rates,
      features: features || [],
      certifications: certifications || [],
      rating: 0,
      numReviews: 0,
    });

    const createdColdStorage = await coldStorage.save();
    res.status(201).json(createdColdStorage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a cold storage
// @route   PUT /api/coldstorage/:id
// @access  Private/Broker/Admin
const updateColdStorage = async (req, res) => {
  try {
    const {
      name,
      state,
      district,
      capacity,
      type,
      commodities,
      address,
      contact,
      location,
      projectCost,
      grantAmount,
      implementingAgency,
      status,
      availableSpace,
      rates,
      features,
      certifications,
      images,
    } = req.body;

    const coldStorage = await ColdStorage.findById(req.params.id);

    if (coldStorage) {
      // Check if the user is the owner or an admin
      if (
        coldStorage.owner.toString() !== req.user._id.toString() &&
        !req.user.isAdmin
      ) {
        res.status(401);
        throw new Error('Not authorized to update this cold storage');
      }

      coldStorage.name = name || coldStorage.name;
      coldStorage.state = state || coldStorage.state;
      coldStorage.district = district || coldStorage.district;
      coldStorage.capacity = capacity || coldStorage.capacity;
      coldStorage.type = type || coldStorage.type;
      coldStorage.commodities = commodities || coldStorage.commodities;
      coldStorage.address = address || coldStorage.address;
      coldStorage.contact = contact || coldStorage.contact;
      coldStorage.location = location || coldStorage.location;
      coldStorage.projectCost = projectCost || coldStorage.projectCost;
      coldStorage.grantAmount = grantAmount || coldStorage.grantAmount;
      coldStorage.implementingAgency =
        implementingAgency || coldStorage.implementingAgency;
      coldStorage.status = status || coldStorage.status;
      coldStorage.availableSpace = availableSpace || coldStorage.availableSpace;
      coldStorage.rates = rates || coldStorage.rates;
      coldStorage.features = features || coldStorage.features;
      coldStorage.certifications = certifications || coldStorage.certifications;
      coldStorage.images = images || coldStorage.images;

      const updatedColdStorage = await coldStorage.save();
      res.json(updatedColdStorage);
    } else {
      res.status(404);
      throw new Error('Cold storage not found');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a cold storage
// @route   DELETE /api/coldstorage/:id
// @access  Private/Admin
const deleteColdStorage = async (req, res) => {
  try {
    const coldStorage = await ColdStorage.findById(req.params.id);

    if (coldStorage) {
      await coldStorage.remove();
      res.json({ message: 'Cold storage removed' });
    } else {
      res.status(404);
      throw new Error('Cold storage not found');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Create new review
// @route   POST /api/coldstorage/:id/reviews
// @access  Private
const createColdStorageReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const coldStorage = await ColdStorage.findById(req.params.id);

    if (coldStorage) {
      const alreadyReviewed = coldStorage.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error('Cold storage already reviewed');
      }

      const review = {
        user: req.user._id,
        rating: Number(rating),
        comment,
      };

      coldStorage.reviews.push(review);

      coldStorage.numReviews = coldStorage.reviews.length;

      coldStorage.rating =
        coldStorage.reviews.reduce((acc, item) => item.rating + acc, 0) /
        coldStorage.reviews.length;

      await coldStorage.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404);
      throw new Error('Cold storage not found');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get nearby cold storages
// @route   GET /api/coldstorage/nearby
// @access  Public
const getNearbyColdStorages = async (req, res) => {
  try {
    const { lat, lng, radius = 50, limit = 10 } = req.query;

    if (!lat || !lng) {
      res.status(400);
      throw new Error('Latitude and longitude are required');
    }

    // Find cold storages within the specified radius (in kilometers)
    const coldStorages = await ColdStorage.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseFloat(radius) * 1000, // Convert km to meters
        },
      },
    }).limit(parseInt(limit));

    res.json(coldStorages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get top rated cold storages
// @route   GET /api/coldstorage/top
// @access  Public
const getTopColdStorages = async (req, res) => {
  try {
    const coldStorages = await ColdStorage.find({})
      .sort({ rating: -1 })
      .limit(5);

    res.json(coldStorages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getColdStorages,
  getColdStorageById,
  createColdStorage,
  updateColdStorage,
  deleteColdStorage,
  createColdStorageReview,
  getNearbyColdStorages,
  getTopColdStorages,
};
