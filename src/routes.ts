import fs from 'node:fs';

const requestHandler = (req: any, res: any) => {
    res.setHeader('Content-Type', 'text/html');
    const { url, method } = req;
    if (url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }
    if (url === "/") {
        res.write(`
                <html>
                    <head><title>Hello</title></head>
                    <body>
                        <form action="/create-user" method="POST">
                            <input type="text" name="username">
                            <button type="submit">Create</button>
                        </form>
                    </body>
                </html>
            `);
        console.log("Hello");
        return res.end();
    }

    if (url === "/users") {
        res.write(`
                <html>
                    <head><title>Users</title></head>
                    <body>
                        <ul>
                            <li>user 1</li>
                            <li>user 2</li>
                        </ul>
                    </body>
                </html>
            `);
        console.log("Users");
        return res.end();
    }

    if (url === "/create-user" && method === "POST") {
        const body: any[] = [];
        req.on("data", (chunk: any) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split("=")[1];
            console.log({ user });
            res.statusCode = 302;
            res.setHeader("Location", "/users");
            return res.end();
        });
    }

    if (url === '/message' && method === 'POST') {
        const body: any[] = [];
        req.on('data', (chunk: any) => {
            console.log({chunk});
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.write('Error writing file');
                    console.error(err);
                    return res.end();
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                console.log('File written successfully');
                return res.end();
            });
        });
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
};

export default requestHandler;