import fs from "fs";
import path from "path";
import { Product as ProductType } from "../types/product";
import rootDir, { appDir } from "../util/path";

const products: ProductType[] = [];
const filePath = path.join(appDir, "public", "data", "products.json");

const getProductsFromFile = (callback: (products: ProductType[]) => void) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return callback([])
        }
        callback(JSON.parse(data.toString()));
    });
}

export class Product {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    save() {
        getProductsFromFile((products: ProductType[]) => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback: (products: ProductType[]) => void) {
        getProductsFromFile(callback);
    }
}