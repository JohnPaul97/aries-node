'use strict'

const express = require('express');
const router = express.Router();
const carController = require('../controllers/cars');

router.get('/cars', carController.getCars);
router.get('/cars/:id', carController.getCar);
router.post('/cars', carController.saveCar);

module.exports = router;
