import express from 'express';
import { getAddProduct, getProducts, postAddProduct } from '../controllers/admin';

const router = express.Router();

router.get('/add-product', getAddProduct); // /admin/add-product => GET
router.get('/products', getProducts); // /admin/products => GET
router.post('/add-product', postAddProduct); // /admin/add-product => POST

export {
    router as default
};