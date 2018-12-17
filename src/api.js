//  // fetch data
//  //Get a list of books & render them
//  const requestData = (url) => {
//    return fetch(url)
//    .then(resp => resp.json())
//  }



// // to like a book send a `PATCH` request to `http://localhost:3000/books/:id` with an array of users who like the book. This array should be equal to the existing array of users that like the book, plus your user.
//  function updateUsersList(url, selectedBook) {
//    return fetch(`${url}/${selectedBook.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json'
//     },
//     body: {
//       users: selectedBook.users
//     }
//    })
//  }