import express from 'express';
import { getAddProduct, postAddProduct } from '../controllers/products';

const router = express.Router();

router.get('/add-product', getAddProduct); // /admin/add-product => GET
router.post('/add-product', postAddProduct); // /admin/add-product => POST

export {
    router as default
};