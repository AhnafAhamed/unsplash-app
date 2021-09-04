class UnsplashApi {
  constructor(apiKey) {
    this._apiKey = apiKey;
    this._baseUrl = "https://api.unsplash.com";
  }

  search(query) {
    return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`
      },
    }).then((res) => res.json());
  }
}

const api = new UnsplashApi("OycYWQgB-b5X6bJLJo9r4XirjCZoQ9ycZ4XgsxtK2CM");


export default api;
