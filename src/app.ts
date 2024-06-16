import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

import { admin, shop } from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', admin);
app.use(shop);

// error handling middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
