// ./express-server/routes/product.server.route.js
import express from 'express';

//import controller file
import * as homeslider from './controllers/homeslider.server.controller';
import * as productController from './controllers/products.server.controller';

var multer = require("multer");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../angular-client/src/assets/uploads/')
    },
    filename: function(req, file, cb) {
        console.log('File Name', file);
        cb(null, Date.now() + '.jpg')
    }
});

var upload = multer({ storage: storage });

// get an instance of express router
const router = express.Router();

//Home Slider
router.route('/slider').get(homeslider.getHomeSliders);
router.route('/slider').post(homeslider.addHomeSlider);
router.route('/slider').put(homeslider.updateHomeSlider);
router.route('/slider/:id').delete(homeslider.deleteHomeSlider);


//New Products
router.route('/products').get(productController.getProducts);
router.route('/products').post(productController.addProducts);
router.route('/products').put(productController.updateProducts);
router.route('/products/:id').get(productController.getProduct)
router.route('/products/:id').delete(productController.deleteProducts);



// file upload
router.post('/upload', upload.array("myfile[]", 12), function(req, res, next) {
    return res.send({
        success: true,
        file: req.files
    });
});

export default router;