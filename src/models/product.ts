import fs from "fs";
import path from "path";
import { Product as ProductType } from "../types/product";
import rootDir, { appDir } from "../util/path";

const products: ProductType[] = [];

export class Product {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }

    save() {
        // path to data file
        const filePath = path.join(appDir, "public", "data", "products.json");
        
        // store products in a json file
        fs.readFile(filePath, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data.toString());
            }
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback: (products: ProductType[]) => void) {
        const filePath = path.join(appDir, "public", "data", "products.json");
        fs.readFile(filePath, (err, data) => {
            if (err) {
                callback([])
            }
            callback(JSON.parse(data.toString()));
        });
    }
}