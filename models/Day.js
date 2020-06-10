const mongoose = require('mongoose');

const DaySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  meals: [
    {
      date: {
        type: Date,
        required: true,
      },

      meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'meal',
        required: true,
      },

      amount: {
        type: Number,
        required: true,
      },
    },
  ],

  weight: {
    type: Number,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Day = mongoose.model('day', DaySchema);
