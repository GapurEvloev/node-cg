import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import rootDir from './util/path';

import { admin, shop } from './routes';
import { get404 } from './controllers';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, '../public')));

app.use('/admin', admin);
app.use(shop);

app.use(get404);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
