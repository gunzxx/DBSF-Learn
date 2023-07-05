const { createServer } = require('http')
const { parse } = require('querystring')

/**
 * Response status
 * 100-199 : informational responses.
 * 200 - 299 : successful responses.
 * 300-399 : redirect.
 * 400-499 : client error.
 * 500-599 : server errors.
 */

const requestListener = (request, response) => {
    const { method, url } = request
    console.log(url);

    if (url == "/") {
        if (method == "GET") {
            response.end("Ini adalah homepage");
        }
        else {
            response.statusCode = 400
            response.statusMessage = "Halaman tidak dapat diakses."
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