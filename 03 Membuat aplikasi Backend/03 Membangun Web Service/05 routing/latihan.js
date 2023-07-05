const { createServer } = require('http')
const { parse } = require('querystring')

/**
 * Fungsi untuk menanggapi menanggapi request dan menangani response
 * 
 * @param request: objek yang berisikan informasi permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
    response.statusCode = 200

    const { method, url } = request
    console.log(url);

    if (url == "/") {
        if (method == "GET") {
            response.end("Ini adalah homepage");
        }
        else {
            response.end(`Halaman tidak dapat diakses dengan ${method} request.`);
        }
    }
    else if (url == "/about") {
        if (method == "GET") {
            response.end("Halo, ini adalah halaman about.")
        }
        else if (method == "POST") {
            let body = ''
            request.on('data', (chunk) => {
                body += chunk.toString()
            })
            request.on('end', () => {
                body = JSON.parse(JSON.stringify(parse(body)))
                console.log(body)
                response.end(`Halo <Noname>, ini adalah halaman about.`)
            })
        }
        else {
            response.end(`Halaman tidak dapat diakses dengan ${method} request.`)
        }
    }
    else{
        response.end("Halaman tidak ditemukan.")
    }
}

const server = createServer(requestListener)

const port = 3000
const host = 'localhost'
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})