import http from 'http';
import url from 'url';
const PORT = 3000;

const handler = (req, res) => {
    const parsedUrl = url.parse(req.url);
    if(parsedUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
}

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

