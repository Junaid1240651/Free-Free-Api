const express = require('express');

const router = express.Router();

const ResourceController = require('../controller/resourceController');

router.post('/', ResourceController.getHomePage);

router.post('/:userId/:resource', ResourceController.createUserData);

router.get('/Dashboard/:userId', ResourceController.getFieldNames);

router.get('/:userId/:resource', ResourceController.getAllData);

router.get('/:userId/:resource/:id', ResourceController.getUserDataById);

router.delete('/:userId/:resource/:id', ResourceController.deleteUserData);

router.put('/:userId/:resource/:id', ResourceController.updateUserData);


module.exports = router;