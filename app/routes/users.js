'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

function firstMidFromUsers(req, res, next){
    console.log("middleware get /users");
    next();
}

router.get('/users', firstMidFromUsers, userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUsers);
router.put('/users/:id', userController.updateUsers);
router.delete('/users/:id', userController.deleteUsers);

module.exports = router;
