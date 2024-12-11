const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',  // Database host (can be different depending on your setup)
  dialect: 'postgres',  // Specify PostgreSQL as the database dialect
  username: 'postgres',  // Your PostgreSQL username
  password: '12345',  // Your PostgreSQL password
  database: 'Assignment',  // Your PostgreSQL database name
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
