const User = require('../Models/User');
const History = require('../Models/History');

exports.getUsersByCategory = async (req, res) => {
  const category = req.query.category || 'Party Ranking';
  const users = await User.find({ category });
  res.json(users);
};

exports.addUser = async (req, res) => {
  try {
    const { name, category } = req.body;
    if (!name || !category) {
      return res.status(400).json({ error: 'Name and category required' });
    }
    const user = new User({ name, category });
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(' Add User Error:', err.message);
    res.status(500).json({ error: 'Server Error' });
  }
};


exports.claimPoints = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'User name required' });
  const user = await User.findOne({ name });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const points = Math.floor(Math.random() * 1000 + 100);
  user.totalPoints += points;
  await user.save();

  const history = new History({
    userId: user._id,
    name: user.name,
    points,
    category: user.category
  });
  await history.save();

  res.json({ success: true, claimed: points, newTotal: user.totalPoints });
};


