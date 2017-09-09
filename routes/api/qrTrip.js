const express = require('express');
const router = express.Router();
const qrTripController = require('../../controllers/qrTripController');

// Mapping routes
router.get('/generate', qrTripController.generateQrTrip);

module.exports = router;
