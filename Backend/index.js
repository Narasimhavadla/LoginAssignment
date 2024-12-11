require('dotenv').config(); // Ensure this is at the top of the file
const express = require('express');
const { connectDB } = require('./config/db');
const authRoutes = require('./router/authRoutes');
const cors = require('cors');
const sequelize = require('./config/db').sequelize; // Ensure you're importing sequelize

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Sync Sequelize models (create the table if it doesn't exist)
sequelize.sync({ force: false })  // `force: false` ensures the table is not dropped if it exists
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
