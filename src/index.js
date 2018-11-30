document.addEventListener("DOMContentLoaded", function() {
  const booksContainer = document.getElementById("books-outer-container");
  console.log('hi')
  const books = new BookFactory();

  function loadView() {
    books.getBooksFromApi()
    .then(() => {
      booksContainer.innerHTML = books.renderView();
    });
  }

  loadView();
});
