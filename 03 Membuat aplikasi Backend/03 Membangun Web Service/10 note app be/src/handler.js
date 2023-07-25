/* eslint-disable import/no-extraneous-dependencies */
const nanoid = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  try {
    const { title, tags, body } = request.payload;
    const id = nanoid.random(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
      id, title, tags, body, createdAt, updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
      const response = h.response({
        status: 'success',
        message: 'Catatan berhasil ditambahkan',
        data: {
          noteId: id,
        },
      });
      console.log(newNote);

      response.code(201);
      return response;
    }

    const response = h.response({
      status: 'fail',
      message: 'Catatan gagal ditambahkan',
    });

    response.code(500);
    return response;
  } catch (error) {
    console.log(error.name);
    if (error.name === 'TypeError') {
      const response = h.response({
        status: 'fail',
        message: 'Data tidak valid',
      });
      response.code(500);
      return response;
    }
    const response = h.response({
      status: 'fail',
      message: error.name,
    });

    response.code(500);
    return response;
  }
};

module.exports = { addNoteHandler };
