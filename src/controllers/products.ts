import { Request, Response, NextFunction } from 'express';
import { Product as ProductType } from '../types/product';
import { Product } from '../models/product';

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
    const newProduct: ProductType = new Product(req.body.title, req.body.price);
    newProduct.save();
    res.redirect('/');
}

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products: ProductType[]) => {
        res.render('shop', {
            products,
            pageTitle: 'MyShop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true,
        });
    });
};