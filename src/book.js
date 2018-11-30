class Book {
  constructor(id, title, description, img_url, userInfo) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img_url = img_url;
    this.userInfo = userInfo;
    this.users = [];
  }

  createAssociatedUsers() {
    this.userInfo.forEach(user => {
      let newUser = new User(user.id, user.username)
      newUser._books[`${this.title}`] = 0;
      this.users.push(newUser)
    });
  }

  changeNameFormat(element) {
    return element.split(" ").join("_");
  }

  render() {
    console.log(this.users)
    return `
      <div class="book-container" style="width: calc(20% - 40px); margin: 20px; padding: 20px; border: 1px solid black">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <img src="${this.img_url} style="max-height: 100px">
        <div class="users-container">
          ${this.createUsersView()}
        </div>
      </div>
    `
  }

  createUsersView() {
    let userContainer = '';
    this.users.forEach( user => {
      this.checkUserLikes(user)
      userContainer += `
        <div class="user">
          <span>${user.username}</span>:
          <span>${this.checkUserLikes(user)} likes</span>
          <p><button class="like-button" data-id="${user.id}">like</button></p>
        </div>
      `
    });
    return userContainer;
  }

  checkUserLikes(user) {
    if(user._books.hasOwnProperty(this.title)) {
      return user._books[this.title];
    }
  }
}