import express from 'express';

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
    `);
});

router.post('/product', (req, res, next) => {
    console.log('Product added');
    console.log(req.body);
    res.redirect('/');
});

export default router;