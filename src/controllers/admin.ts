import { Request, Response, NextFunction } from 'express';
import { Product as ProductType } from '../types/product';
import { Product } from '../models/product';

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
}

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    const newProduct: ProductType = new Product(req.body.title, req.body.price);
    newProduct.save();
    res.redirect('/');
}

export const getProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.fetchAll((products: ProductType[]) => {
        res.render('admin/products', {
            products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
            hasProducts: products.length > 0
        });
    });
}