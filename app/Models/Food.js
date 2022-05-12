const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },

  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be greater than 0']
  },

  specifications: [
    {
      type: String,
      required: [true, 'Specifications are required']
    }
  ],

  createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Food', FoodSchema);