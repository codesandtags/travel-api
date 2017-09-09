const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

// Mapping routes
router.get('/', cityController.listOfCities);
router.get('/:name', cityController.getCityByName);

router.post('/', cityController.addNewCity);
module.exports = router;
