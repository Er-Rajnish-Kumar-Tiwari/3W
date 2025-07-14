const History = require('../Models/History');

exports.getRecentHistory = async (req, res) => {
  const records = await History.find().sort({ timestamp: -1 }).limit(50);
  res.json(records);
};
