// ./express-server/routes/product.server.route.js
import express from 'express';
var multer = require("multer");

//import controller file
import * as productController from '../controllers/product.server.controller';
import * as homesliderController from '../controllers/homeslider.server.controller';



// get an instance of express router
const router = express.Router();


router.route('/')
    .get(productController.getProducts)
    .post(productController.addProduct)
    .put(productController.updateProduct);

router.route('/:id')
    .get(productController.getProduct)
    .delete(productController.deleteProduct);

//Home Slider
router.post('/upload', multer({ dest: "./uploads/" }).array("myfile[]", 12), homesliderController.addSlider);


export default router;