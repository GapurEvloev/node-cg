import express from 'express';

import { User } from '../types/user';

const router = express.Router();

const users: User[] = [];

// /users => GET
router.get('/', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        users,
        path: '/users',
        activeAddProduct: true,
        formCSS: true,
        userCSS: true,
        hasUsers: users.length > 0,
    });
});

router.post('/', (req, res, next) => {
    const newUser: User = {
        name: req.body.title,
        age: parseFloat(req.body.price),
    };
    users.push(newUser);
    res.redirect('/users');
});

export { 
    users,
    router as default
};