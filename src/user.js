class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
    this._books = {};
  }

  likeBook(book) {
    if(this._books.hasOwnProperty(`${book}`) && this._books.book < 1) {
      this._books.book += 1;
    }

    else {
      this._books.book = 0;
    }
  }
}