const QRCode = require('qrcode');
const qrTrip = require('../data/qrtrip.json');

/**
 * Generate a QR Code Trip
 * @param req
 * @param res
 */
exports.generateQrTrip = (req, res) => {
    const data = JSON.stringify(qrTrip);

    QRCode.toDataURL(data, function (err, url) {
        res.send(url);
    });
};