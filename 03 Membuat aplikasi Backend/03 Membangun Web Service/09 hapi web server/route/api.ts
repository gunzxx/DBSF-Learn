const api = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut."
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Homepage"
        },
    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return "Post Homepage"
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return "Halaman tidak ditemukan."
        },
    },
];

module.exports = api;