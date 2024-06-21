import path from 'path';
import express from 'express';

import { User } from '../types/user';
import { users } from './users';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('main', {
        users,
        pageTitle: 'Main Page',
        path: '/',
        hasUsers: users.length > 0,
        activeShop: true,
        userCSS: true,
    });
});

export default router;