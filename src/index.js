listPanel.addEventListener('click', (event) => {
  let book = dataStore.bookz.find(book => book.id == event.target.id);
  bookShow(book);
})

document.addEventListener('click', (event) => {
  let book = dataStore.bookz.find(book => book.id == event.target.id);
  if (event.target.className == "read-button" && event.target.dataset.name == "read") {
    book.users.push({"id":1, "username":"pouros"});
    prox2.bookz = dataStore.bookz
    event.target.dataset.name = "un-read"
    event.target.innerText = "Unread Book"
  } else if (event.target.className == "read-button" && event.target.dataset.name == "un-read") {
    book.users.pop();
    prox2.bookz = dataStore.bookz
    event.target.dataset.name = "read"
    event.target.innerText = "Read Book"
  }
})
