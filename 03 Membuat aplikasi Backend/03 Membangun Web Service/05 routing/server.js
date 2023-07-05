const {createServer} = require('http')

/**
 * Fungsi untuk menanggapi menanggapi request dan menangani response
 * 
 * @param request: objek yang berisikan informasi permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
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