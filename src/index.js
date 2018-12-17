const url = 'http://localhost:3000/books'

document.addEventListener('DOMContentLoaded', () => {


  let allBooks = []
  const myId = 1
  const myUsername = 'pouros'
  
  const bookList = document.getElementById('list')
  const showPanel = document.getElementById('show-panel')
  fetch(url)
    .then(resp => resp.json())
    .then(books => {
      console.table(books)
      allBooks = books
      let allUsers = allBooks['users']
      console.log(allUsers)
   bookList.innerHTML = books.map(renderBook).join('')
    })

    function renderBook(book){
      return `
      <li data-id=${book.id}>${book.title}</li>
      `
    }

      // show one book
    bookList.addEventListener('click', e => {
      if(e.target.dataset.id){
        bookId = parseInt(e.target.dataset.id)
        foundBook = allBooks.find(book => book.id === bookId)
        renderShowBook(foundBook)
      }
    })

      // show one helper
    function renderShowBook(book) {
      let userLis = book.users.map(user => `<li data-id="${user.id}">${user.username}</li>`).join('')
      
      showPanel.innerHTML += `
      <img src="${book.img_url}">
      <p>${book.description}</p>
      <ul class='likers'>
        ${userLis}
      </ul>
      <button data-id='${book.id}' data-action='read'>Read Book</button>
      `
    }     


    showPanel.addEventListener('click', e => {
      let currentUser = {id: 1, username: 'pouros'}
      if(e.target.dataset.action === 'read') {
        // console.log(e.target)
        targetId = parseInt(e.target.dataset.id)
        
        foundBook = allBooks.find(book => book.id === targetId)
        let bookLikers = foundBook.users
        console.log(bookLikers)
        // let foundUser = bookLikers.find(book => book.id === targetId)
        
        // foundUser = bookLikers.find(book => book.id === currentUser.id)
       
        // for(let user of bookLikers) {
        //   bookLikers.push(currentUser)
        // }
        // let users = userLikers.join(', ')
        
        if(!bookLikers.includes(currentUser)) {
          bookLikers.push(currentUser)
            console.log(bookLikers)
        fetch(`${url}/${foundBook.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            users: bookLikers
          })

        });
        }else {
        alert("You already liked this.")
      }
    }
  })

})