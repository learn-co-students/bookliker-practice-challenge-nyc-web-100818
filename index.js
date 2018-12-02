document.addEventListener("DOMContentLoaded", function() {
  const ul = document.getElementById("list")
  const show = document.getElementById("show-panel")
  let books =[]
  adapterBooks = new JSONAPIAdapter("books")
  adapterUsers = new JSONAPIAdapter("users")

  function fetchAllBooks(){
    adapterBooks.getAll()
      .then(data => {
        renderBookList(data)
      })
  }

  function getAUser(id, callback){
    adapterUsers.getAll()
      .then(data => {
        callback(data)
      })
  }

  function getABook(id, callback){
    console.log("IN GET A BOOK");
    adapterBooks.getSingle(id)
      .then(data => {
         callback(data)
      })
  }

  function renderBookList(books) {
    console.log(books);
    ul.innerHTML =""
    books.forEach(function(book){
      ul.innerHTML +=
      `
      <li data-id="${book.id}">${book.title}</li>
      `
    })
  }

  function clickStateBooks(data){
    ul.addEventListener("click", function(e){
      e.target.dataset.id ? getABook(e.target.dataset.id, displayBook) : null
    })
  }

  function clickStateBook(){
    let userid = 1
    let form = document.getElementById("show-form")
    console.log(form);
    form.addEventListener("submit", function(e){
      e.preventDefault()
      let id = e.target.parentElement.id
      getABook(id, function(book){
        let found = book.users.find(function(user){
            return user.id == userid
        })
        if (!found){
          getAUser(userid, function(users){
            found = users.find(function(user){
              return userid === parseInt(user.id)
            })
            console.log(book.users);
            book.users.push(found)
            adapterBooks.updateItem(book, book.id)
            displayBook(book)
            console.log(book.users);

          })
        }
      })
    })
  }

  function addReaderToBook(){

  }

  function displayBook(book){
    if (!book) return;
    console.log(book);
    show.innerHTML = `
      <div id=${book.id}>
        <h1>${book.title}</h1>
        <img src="${book.img_url}">
        <p>${book.description}</p>
        <p>like</p>
        <ul id="like">
          ${book.users.map(function(user){
            return `<li>${user.username}</li>`
          }).join('')}
        </ul>
        <form id="show-form">
        <input type="submit" value="Read Book">
        </form>
      </div>
    `
    clickStateBook()
  }

  fetchAllBooks()
  clickStateBooks()
});
