const homeController = require('../controllers/homeController');
const ipfsController = require('../controllers/ipfsController');

function initRoutes(app) {
    app.get('/', homeController().home);
    app.post('/upload-ipfs', ipfsController().uploadCertificate);
}


module.exports = initRoutes;