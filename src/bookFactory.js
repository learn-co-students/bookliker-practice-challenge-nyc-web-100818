class BookFactory {
  constructor() {
    this._api = new API('books')
    this._books = [];
  }

  getBooksFromApi() {
    return this._api.getResourse()
      .then(data => {
        data.forEach(book => {
          this.findOrCreateBook(book.id, book.title, book.description, book.img_url, book.users)
        });
      });
  }

  renderView() {
    let bookContainer = '';
    let view = this._books.forEach( book => {
      bookContainer += book.render();
    })

    return bookContainer;
  }

  findOrCreateBook(id, title, description, img_url, userInfo) {
    let book = this.getBookByName(name)

    if(book) {
      return book
    }

    else {
      const newBook = new Book(id, title, description, img_url, userInfo);

      newBook.createAssociatedUsers();

      this._books.push(newBook);
      return newBook;
    }
  }

  getBookByName(name) {
    this._books.find(book => book.name === name );
  }
}