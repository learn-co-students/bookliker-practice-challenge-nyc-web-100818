document.addEventListener("DOMContentLoaded", function() {
const bookList = document.querySelector("#list")
const showBookContainer = document.querySelector("#show-panel")
let allBooks = []
let currentUser = {id:1, username:"pouros"}
// console.log(bookList);
function fetchAllBooks() {
  fetch(`http://localhost:3000/books`)
  .then(res => res.json())
  .then(data => {console.table(data);
      renderAllBooks(data);
      allBooks = data
  })//end then
} //end of fetchAllBooks
fetchAllBooks()

////// SHOW SINGLE BOOK
bookList.addEventListener('click', (e) =>{
  selectedId = parseInt(e.target.id)
  foundBook = allBooks.find((b) => b.id === selectedId)
  renderSingleBook(foundBook)
})//end addEventListener

showBookContainer.addEventListener('click', (e) =>{
  if (e.target.id === "readbook"){
    clickedBookID = parseInt(e.target.parentElement.id);
    foundBook = allBooks.find((b) => b.id === clickedBookID)
    bookReaders = foundBook.users
    found = bookReaders.find((b) => b.id === currentUser.id)
    if (found === undefined) {
      bookReaders.push(currentUser);
      patchToServer(bookReaders, foundBook)
      // console.log(bookReaders);
    } else {
      alert("You already read the book!")
    }//end of if
  }
})


///// HELPER METHODS BELOW:
function patchToServer(readers, book) {
  console.log(readers, book);
  fetch(`http://localhost:3000/books/${book.id}`, {method: 'PATCH',
    headers: { "Content-Type": "application/json",
      Accept: "application/json"},
    body: JSON.stringify({users: readers})
  }).then(data => data.json())
  .then(result => renderSingleBook(result));

}


function renderAllBooks(books){
  bookList.innerHTML =
  books.map((book)=> {
    return `<li id=${book.id}>Title: ${book.title}</li>`
  }).join('')//end of map
} //end renderAllBooks

function renderSingleBook(book) {
  usersLi = book.users.map((e)=>
    `<li>${e.username}</li>`
    ).join('')

    showBookContainer.innerHTML = `<div id=${book.id}><img src=${book.img_url}><br>Title: ${book.title} <br> <p> Description: ${book.description} </p> <button id="readbook">Read Book</button><div> ${usersLi} </div>`
}//end renderSingleBook

}); //end of DOMContentLoaded
