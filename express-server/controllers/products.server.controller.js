// ./express-server/controllers/product.server.controller.js
import mongoose from 'mongoose';

//import models
import Products from '../models/products.server.model';

export const getProducts = (req, res) => {
    Products.find().exec((err, products) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error in products' });
        }

        return res.json({ 'success': true, 'message': 'products fetched successfully', products });
    });
}

export const addProducts = (req, res) => {
    const newProducts = new Products(req.body);
    newProducts.save((err, product) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error tod' });
        }

        return res.json({ 'success': true, 'message': 'Products added successfully', product });
    })
}

export const updateProducts = (req, res) => {
    Products.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, product) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
        }
        console.log(product);
        return res.json({ 'success': true, 'message': 'Products Updated Successfully', product });
    })
}

export const getProduct = (req, res) => {
    Products.find({ _id: req.params.id }).exec((err, product) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Errord' });
        }
        if (product.length) {
            return res.json({ 'success': true, 'message': 'Products fetched by id successfully', product });
        } else {
            return res.json({ 'success': false, 'message': 'Products with the given id not found' });
        }
    })
}

export const deleteProducts = (req, res) => {
    Products.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) {
            return res.json({ 'success': false, 'message': 'Some Error' });
        }

        return res.json({ 'success': true, 'message': 'Products Deleted Successfully', product });
    })
}