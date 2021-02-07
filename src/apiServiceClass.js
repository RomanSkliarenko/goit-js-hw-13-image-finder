export default class SearchImage {
  constructor() {
    this._query = 'asdasdasd';
    this._page = 1;
  }
  searchImageFetch() {
    const key = '20177896-1cf321c1d71fc21c86755b502';
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=5&key=${key}`,
    ).then(res => res.json());
  }

  get query() {
    return this._query;
  }
  set query(newQuery) {
    this._query = newQuery;
  }
  get page() {
    return this._page;
  }
  set page(newPage) {
    this._page = newPage;
  }
}
