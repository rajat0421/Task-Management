const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const {router :authRoutes}  = require("./routes/authRoutes"); // Import auth routes
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Routes
app.use('/api', taskRoutes);
app.use('/api/auth', authRoutes); // Use auth routes
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Base route
app.get('/', (req, res) => {
  res.send('Task Management App Backend Running');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
