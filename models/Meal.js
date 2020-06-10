const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  calories: {
    type: Number,
    required: true,
  },

  carbohidrates: {
    type: Number,
    required: true,
  },

  proteins: {
    type: Number,
    required: true,
  },

  fats: {
    type: Number,
    required: true,
  },
});

module.exports = Meal = mongoose.model('meal', MealSchema);
