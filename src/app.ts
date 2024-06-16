import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req: Request, res: Response, next: NextFunction) => {
    res.send(`
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Add Product</button>
        </form>
    `);
});

app.post('/product', (req: Request, res: Response, next: NextFunction) => {
    console.log('Product added');
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
