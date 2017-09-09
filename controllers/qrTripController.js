const QRCode = require('qrcode');

/**
 * Generate a QR Code Trip
 * @param req
 * @param res
 */
exports.generateQrTrip = (req, res) => {
    console.log('TODO: Adding new city...');

    QRCode.toDataURL('I am a pony!', function (err, url) {
        console.log(url);
    });

    res.send('this method needs to be implemented...');
};