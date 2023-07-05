/**
 * Response status
 * 100-199 : informational responses.
 * 200 - 299 : successful responses.
 * 300-399 : redirect.
 * 400-499 : client error.
 * 500-599 : server errors.
 */

const {createServer} = require('http')

const requestListener = (request,response)=>{
    const {url}=request;
    response.end(url);
}

const server = createServer(requestListener)

const port = 3000
const host = 'localhost'
server.listen(port,host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`)
})