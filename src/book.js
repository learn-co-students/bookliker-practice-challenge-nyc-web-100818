
const helper1 = {
  set: () => {
    renderBooks(dataStore.bookz)
  }
}

const helper2 = {
  set: () => {
    reRenderUsers(dataStore.bookz)
  }
}

const dataStore = { bookz: []}
const prox = new Proxy(dataStore, helper1)
const prox2 = new Proxy(dataStore, helper2)

class Book {
  constructor(book) {
    this.id = book.id;
    this.title = book.title;
    this.description = book.description;
    this.image = book.img_url;
    this.users = book.users;
    dataStore.bookz.push(this);
  }
}
