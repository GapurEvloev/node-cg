import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

// app.use(express.urlencoded({ extended: true })); // option 1
app.use(express.json()); // option 2

// // // option 1 - from course
// app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log('Request received');
//     next();
// });
// app.use((req: Request, res: Response, next: NextFunction) => {
//     console.log('Request received 2');
//     res.send('<h1>Hello from Express!</h1>');
// });

// // option 2 - my version
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello, Express with TypeScript!</h1>');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
