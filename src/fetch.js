fetch(`http://localhost:3000/books`, { method: 'GET' })
.then(response => response.json())
.then(books => {
  books.forEach(book => {
    let newBook = new Book(book);
  })
  prox.bookz = dataStore.bookz
})
