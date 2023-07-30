/* eslint-disable eqeqeq */
const nanoid = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  try {
    if (request.payload.name == undefined) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }

    const id = nanoid.nanoid();
    const finished = readPage == pageCount;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      insertedAt,
      updatedAt,
    };
    books.push(newBook);

    return h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: newBook.id,
        ...newBook,
      },
    }).code(201);
  } catch (error) {
    if (error.name == 'TypeError') {
      const response = h.response({
        status: 'fail',
        message: 'Parameter tidak valid',
      });
      response.code(400);
      return response;
    }
    const response = h.response({
      status: 'fail',
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An internal server error occurred',
    });
    response.code(500);
    return response;
  }
};

const getAllBooksHandler = (request, h) => {
  const reqName = request.query.name ?? '';
  const reqReading = request.query.reading ?? '';
  const reqFinished = request.query.finished ?? '';
  console.log([reqName, reqReading, reqFinished]);

  if (reqName != '') {
    // const regex = new RegExp(reqName, 'i');
    return h.response({
      status: 'success',
      data: {
        books: books.filter((book) => (new RegExp(reqName, 'i')).test(book.name))
          .map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    });
  }

  if (reqReading != '') {
    return h.response({
      status: 'success',
      data: {
        books: books.filter((book) => book.reading == reqReading)
          .map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    });
  }

  if (reqFinished != '') {
    return h.response({
      status: 'success',
      data: {
        books: books.filter((book) => book.finished == reqFinished)
          .map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    });
  }

  return h.response({
    status: 'success',
    data: {
      books: books.map(({ id, name, publisher }) => ({ id, name, publisher })),
    },
  });
};

const getBookByIdHandler = (request, h) => {
  const { bookid } = request.params;
  const book = books.filter((b) => b.id == bookid)[0];
  if (book != undefined) {
    return h.response({
      status: 'success',
      data: {
        book,
      },
    });
  }
  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

const editBookByIdHandler = (request, h) => {
  try {
    if (request.payload.name == undefined) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }

    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }
    const { bookid } = request.params;
    const finished = readPage == pageCount;
    const updatedAt = new Date().toISOString();
    const index = books.findIndex((book) => book.id == bookid);

    if (index == -1) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      }).code(404);
    }

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };
    console.log(books[index]);

    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
      data: {
        book: books[index],
      },
    }).code(200);
  } catch (error) {
    if (error.name == 'TypeError') {
      const response = h.response({
        status: 'fail',
        message: 'Parameter tidak valid',
      });
      response.code(400);
      return response;
    }
    return h.response({
      status: 'fail',
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An internal server error occurred',
    }).code(500);
  }
};

const deleteBookByIdHandler = (request, h) => {
  const { bookid } = request.params;
  const index = books.findIndex((book) => book.id == bookid);
  if (index == -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }

  books.splice(index, 1);
  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });
};

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
