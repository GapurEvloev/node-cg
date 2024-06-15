import http from 'node:http';
import requestHandler from './routes';

const port = 3000;

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
