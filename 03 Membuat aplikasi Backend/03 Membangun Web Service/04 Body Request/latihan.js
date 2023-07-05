const { createServer } = require('http');
const { parse } = require('querystring');

/**
 * Fungsi untuk menanggapi menanggapi request dan menangani response
 * 
 * @param request: objek yang berisikan informasi permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    response.statusCode = 200;

    const { method } = request;
    if (method == "GET") {
        return response.end("Hello world.");
    }
    else if (method == "POST") {
        let body = '';
        request.on('data', (chunk) => {
            if(chunk != null) body += chunk.toString();
        })
        request.on('end', () => {
            body = JSON.parse(JSON.stringify(parse(body)))
            console.log(body);
            if(body.name) return response.end(`Hello, ${body.name}`);
            response.end("No name.");
        })
    }
    else{
        response.end("Unknown method.");
    }
};

const server = createServer(requestListener);

const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});