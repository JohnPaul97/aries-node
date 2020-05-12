'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const carsController = require('../controllers/cars');
const commonController = require('../controllers/common');

function firstMidFromUsers(req, res, next){
    console.log("middleware get /users");
    next();
}

router.get('/users', firstMidFromUsers, userController.getUsers, commonController.responseToJSON('users'));
router.get('/users/reports', userController.getUsers, carsController.getCars, commonController.concatCollections('users', 'cars'), commonController.responseToJSON('reports'));
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUsers);
router.put('/users/:id', userController.updateUsers);
router.delete('/users/:id', userController.deleteUsers);

module.exports = router;
