class API {
  constructor(resource) {
    this.resource = resource
    this.baseUrl = "http://localhost:3000";
  }

  getResourse() {
    let url = `this.baseUrl/${this.resource}`
    let options = { method: "GET" }

    return this.fetchJson(url, options)
  }

  fetchJson(url, options) {
    return fetch('http://localhost:3000/books', options)
      .then(response => response.json())
  }
}