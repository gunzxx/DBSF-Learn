const {createServer} = require('http');

/**
 * Fungsi untuk menanggapi menanggapi request dan menangani response
 * 
 * @param request: objek yang berisikan informasi permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request,response)=>{
    response.statusCode = 200;

    const {method} = request;
    if(method == "GET"){
        return response.end("Hello world.");
    }
    else if(method == "POST"){
        let body = [];
        request.on('data',(chunk)=>{
            // console.log(chunk);
            // console.log(Buffer.from(chunk).toString());
            body.push(chunk);
        })
        request.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            response.end(fullBody);
        })
    }
};

const server = createServer(requestListener);

const port = 3000;
const host = 'localhost';
server.listen(port,host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});