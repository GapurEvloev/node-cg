import { Request, Response, NextFunction } from 'express';
import { Product as ProductType } from '../types/product';
import { Product } from '../models/product';
import path from 'path';

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products: ProductType[]) => {
        res.render('shop/product-list', {
            products,
            pageTitle: 'MyShop Products',
            path: '/products',
            hasProducts: products.length > 0
        });
    });
};

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products: ProductType[]) => {
        res.render('shop/index', {
            products,
            pageTitle: 'MyShop Main Page',
            path: '/',
            hasProducts: products.length > 0
        });
    });
};

export const getCart = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop/cart', {
        pageTitle: 'MyShop Cart',
        path: '/cart',
        hasProducts: false
    });
}

export const getCheckout = (req: Request, res: Response, next: NextFunction) => {
    res.render('shop/checkout', {
        pageTitle: 'MyShop Checkout',
        path: '/checkout',
    });
}