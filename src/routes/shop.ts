import path from 'path';
import express from 'express';

import rootDir from '../util/path';
import { products } from './admin';

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

export default router;