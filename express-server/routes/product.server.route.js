// ../express-server/routes/product.server.route.js
import express from 'express';
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../angular-client/src/assets/uploads/')
    },
    filename: function(req, file, cb) {
        console.log('File Name', file);
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})

var upload = multer({ storage: storage });

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
router.post('/upload', upload.array("myfile[]", 12), function(req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
    return res.send({
        success: true,
        file: req.files
    });
});

router.route('/test/homeSliders').get(homesliderController.getHomeSliders);

export default router;