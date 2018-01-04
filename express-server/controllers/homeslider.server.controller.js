// ./express-server/controllers/product.server.controller.js
import mongoose from 'mongoose';

//import models
import Slider from '../models/slider.server.model';

// export const getslider = (req, res) => {
//     Product.find().exec((err, products) => {
//         if (err) {
//             return res.json({ 'success': false, 'message': 'Some Error in products' });
//         }

//         return res.json({ 'success': true, 'message': 'products fetched successfully', products });
//     });
// }

// app.post("/upload", multer({ dest: "./uploads/" }).array("myfile[]", 12), function(req, res) {
//     console.log(req.files)
//     res.send(req.files);
// });

export const addSlider = (req, res) => {
    console.log(req.files[0])
    const newSlider = new Slider(req.files[0]);
    console.log(newSlider)

    newSlider.save((err, slider) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error tod' });
        }

        return res.json({ 'success': true, 'message': 'Product added successfully', slider });
    })
}

// export const updateProduct = (req, res) => {
//     Product.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, product) => {
//         if (err) {
//             return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
//         }
//         console.log(product);
//         return res.json({ 'success': true, 'message': 'Product Updated Successfully', product });
//     })
// }

// export const getProduct = (req, res) => {
//     Product.find({ _id: req.params.id }).exec((err, product) => {
//         if (err) {
//             return res.json({ 'success': false, 'message': 'Some Errord' });
//         }
//         if (product.length) {
//             return res.json({ 'success': true, 'message': 'Product fetched by id successfully', product });
//         } else {
//             return res.json({ 'success': false, 'message': 'Product with the given id not found' });
//         }
//     })
// }

// export const deleteProduct = (req, res) => {
//     Product.findByIdAndRemove(req.params.id, (err, product) => {
//         if (err) {
//             return res.json({ 'success': false, 'message': 'Some Error' });
//         }

//         return res.json({ 'success': true, 'message': 'Product Deleted Successfully', product });
//     })
// }