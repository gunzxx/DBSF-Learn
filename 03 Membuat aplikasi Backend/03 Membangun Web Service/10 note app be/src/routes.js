/* eslint-disable import/no-extraneous-dependencies */
const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: (_, h) => h.response({ message: 'OK' }),
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;
