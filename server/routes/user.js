const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/auth');
const userController = require('../controller/user');

router.get('/', userController.getHomePage);

router.post('/user/:id', userController.createUserData);

router.get('/user/:id', userController.getUserData);

module.exports = router;