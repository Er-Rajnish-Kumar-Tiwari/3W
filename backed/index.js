const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./Routes/userRoutes');
const historyRoutes = require('./Routes/historyRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Tanish281202:Tanish281202@cluster0.zjcytrj.mongodb.net/leaderboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(' MongoDB connected'))
  .catch((err) => console.error(' MongoDB connection error:', err));

app.use('/api/users', userRoutes);
app.use('/api/history', historyRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));