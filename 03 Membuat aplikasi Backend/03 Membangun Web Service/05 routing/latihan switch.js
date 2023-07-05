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

    switch (url) {
        case "/":
            switch (method) {
                case "GET":
                    response.end("Ini adalah homepage");
                    break;
                default:
                    response.end(`Halaman tidak dapat diakses dengan ${method} request.`);
                    break;
            }
            break;
        case "/about":
            switch (method) {
                case "GET":
                    response.end("Halo, ini adalah halaman about.")
                    break;
                case "POST":
                    let body = ''
                    request.on('data', (chunk) => {
                        body += chunk.toString()
                    })
                    request.on('end', () => {
                        body = JSON.parse(JSON.stringify(parse(body)))
                        console.log(body)
                        if (body.name) return response.end(`Halo ${body.name}, ini adalah halaman about.`)
                        response.end(`Halo <Noname>, ini adalah halaman about.`)
                    })
                    break;
                default:
                    response.end(`Halaman tidak dapat diakses dengan ${method} request.`)
                    break;
            }
            break;
        default:
            response.end("Halaman tidak ditemukan.")
            break;
    }
}

const server = createServer(requestListener)

const port = 3000
const host = 'localhost'
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`)
})