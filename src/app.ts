import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import { admin, shop } from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(admin);
app.use(shop);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
