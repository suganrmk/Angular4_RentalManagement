// ./express-server/routes/product.server.route.js
import express from 'express';

//import controller file
import * as homeslider from './controllers/homeslider.server.controller';

// get an instance of express router
const router = express.Router();


router.route('/slider').get(homeslider.getHomeSliders);
router.route('/slider').post(homeslider.addHomeSlider);
router.route('/slider').put(homeslider.updateHomeSlider);
router.route('/slider/:id').delete(homeslider.deleteHomeSlider);

//     .get(productController.getProduct)
//     .delete(productController.deleteProduct);



export default router;