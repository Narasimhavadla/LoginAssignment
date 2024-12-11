const express = require('express');
const { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/authController');
const router = express.Router();

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Get All Users
router.get('/users', getAllUsers);

// Get User by ID
router.get('/users/:id', getUserById);

// Update User
router.put('/users/:id', updateUser);

// Delete User
router.delete('/users/:id', deleteUser);

module.exports = router;
