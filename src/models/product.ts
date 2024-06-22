import { Product as ProductType } from "../types/product";

const products: ProductType[] = [];

export class Product {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}