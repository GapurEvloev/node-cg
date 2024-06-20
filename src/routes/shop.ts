import path from 'path';
import express from 'express';

import rootDir from '../util/path';
import { products } from './admin';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop', {
        products,
        pageTitle: 'MyShop',
    });
});

export default router;