// ./express-server/routes/product.server.route.js
import express from 'express';

//import controller file
import * as homeslider from './controllers/homeslider.server.controller';
import * as productController from './controllers/products.server.controller';

// get an instance of express router
const router = express.Router();

//Home Slider
router.route('/slider').get(homeslider.getHomeSliders);
router.route('/slider').post(homeslider.addHomeSlider);
router.route('/slider').put(homeslider.updateHomeSlider);
router.route('/slider/:id').delete(homeslider.deleteHomeSlider);
//     .get(productController.getProducts)
//     .delete(productController.deleteProducts);


//New Products
router.route('/products').get(productController.getProducts);
router.route('/products').post(productController.addProducts);
router.route('/products').put(productController.updateProducts);

// router.route('/:id')
//     .get(productController.getProducts)
//     .delete(productController.deleteProducts);






export default router;