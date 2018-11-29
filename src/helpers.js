const list = document.getElementById('list')
const listPanel = document.getElementById('list-panel')
const showPanel = document.getElementById('show-panel')

const renderBooks = (obj) => {
  obj.forEach(book => {
    list.innerHTML += bookHTML(book)
  })
}

const bookHTML = (book) => {
  return `
  <li id="${book.id}">
  ${book.title}
  </li>
  `
}

const bookShow = (book) => {
  showPanel.innerHTML = ""
  showPanel.innerHTML += `
  <div class="book-show" id="${book.id}">
    <h1>${book.title}</h1>
    <img src="${book.image}">
    <p>${book.description}</p>
    <ul id="users-list">
    </ul>
    <button id="${book.id}" class="read-button" data-name="read"> Read Book </button>
  </div>
  `
  book.users.forEach(user => {
    const ul = document.getElementById("users-list")
    let li = document.createElement("li");
    li.innerHTML = `<strong> ${user.username} </strong>`;
    li.id = user.id;
    ul.appendChild(li);
  })
}

const reRenderUsers = (bookz) => {
  const ul = document.getElementById("users-list")
  ul.innerHTML = ""
  let bookShowDiv = document.querySelector(".book-show")
  let book = bookz.find(book => book.id == bookShowDiv.id)
  book.users.forEach(user => {
    let li = document.createElement("li");
    li.innerHTML = `<strong> ${user.username} </strong>`;
    li.id = user.id;
    ul.appendChild(li);
  })
}
