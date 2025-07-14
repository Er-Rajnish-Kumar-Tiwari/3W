const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  points: Number,
  timestamp: {
    type: Date,
    default: Date.now
  },
  category: String
});

module.exports = mongoose.model('History', historySchema);
