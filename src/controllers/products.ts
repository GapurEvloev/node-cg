import { Request, Response, NextFunction } from 'express';
import { Product } from '../types/product';

export const products: Product[] = [];

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        formCSS: true,
        productCSS: true,
    });
}

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const newProduct: Product = {
        title: req.body.title,
        price: parseFloat(req.body.price),
    };
    products.push(newProduct);
    res.redirect('/');
}

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop', {
        products,
        pageTitle: 'MyShop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
    });
}