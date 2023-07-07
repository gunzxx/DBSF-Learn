// require('node');

const api = [
    {
        method: '*',
        path: '/',
        handler: (_, h) => {
            return h
            .response({
                message: "Halaman tidak dapat diakses dengan method tersebut."
            })
            .code(400)
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (_, h) => {
            return h.response({
                message: "Homepage"
            })
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (_, h) => {
            return h.response({
                message: "About page"
            })
        },
    },
    {
        method: 'GET',
        path: '/hello/{name}',
        handler: (request, h) => {
            const name = request.params.name ?? 'world.'
            const message = request.query.lang == "id" ? `Selamat datang, ${name}.` : `Welcome, ${name}.`
            return h.response({
                message : message
            })
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const email = request.payload.email
            const password = request.payload.password
            const message = email && password ? `Selamat datang di beranda.` : "Data tidak valid."
            console.log(request.info.cors);
            return h.response({
                message: message
            })
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (_, h) => {
            return h
            .response({
                message: "Not Found",
            })
            .code(404)
        },
    },
];

module.exports = api;