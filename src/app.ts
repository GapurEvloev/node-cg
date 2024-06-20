import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import rootDir from './util/path';

import { admin, shop } from './routes';

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, '../public')));

app.use('/admin', admin);
app.use(shop);

// error handling middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    // sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', {
        pageTitle: 'Page Not Found!',
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
