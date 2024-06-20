import path from 'path';
import express from 'express';

import rootDir from '../util/path';
import { Product } from '../types/product';

const router = express.Router();

const products: Product[] = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
});

// /admin/product => POST
router.post('/add-product', (req, res, next) => {
    const newProduct: Product = {
        title: req.body.title,
        price: parseFloat(req.body.price),
    };
    products.push(newProduct);
    res.redirect('/');
});

export { 
    products,
    router as default
};