const books = [
  {
    id: 'Qbax5Oy7L8WKf74l',
    name: 'Buku A',
    publisher: 'Dicoding Indonesia',
    createdAt: 'Indonesia',
  },
  {
    id: '1L7ZtDUFeGs7VlEt',
    name: 'Buku B',
    publisher: 'Dicoding Indonesia',
    createdAt: 'Indonesia',
  },
  {
    id: 'K8DZbfI-t3LrY7lD',
    name: 'Buku C',
    publisher: 'Dicoding Indonesia',
    createdAt: 'Indonesia',
  },
];

const newBook = books.map(({ id, name, publisher }) => ({ id, name, publisher }));
console.log(newBook);
