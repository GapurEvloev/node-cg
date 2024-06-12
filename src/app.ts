import http from 'node:http';
import fs from 'node:fs';

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const { url, method } = req;
    if (url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }
    if (url === '/') {
        res.write(`
            <html>
                <head><title>Enter message</title></head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    };

    if (url === '/message' && method === 'POST') {
        const body: any[] = [];
        req.on('data', (chunk) => {
            console.log({chunk});
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        // res.writeHead(302, {
        //     'Location': '/'
        // });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    };

    res.write(`
        <html>
            <head><title>My first page</title></head>
            <body>
                <h1>Hello from my Node.js server!</h1>
            </body>
        </html>
    `);
    res.end();
});

server.listen(port, () => {
    console.log('Server started on http://localhost:3000');
});