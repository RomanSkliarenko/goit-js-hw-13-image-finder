import './styles.css';
import ApiServiceClass from './apiServiceClass.js';
import murkup from './templates/image-card.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
  serchQueryForm: document.querySelector('[id="search-form"]'),
  formInput: document.querySelector('[name="query"]'),
  submitBtn: document.querySelector('.submitBtn'),
  moreBtn: document.querySelector('.moreBtn'),
};

const fetchServise = new ApiServiceClass();

const searchQuery = function (e) {
  e.preventDefault();
  fetchServise.page = 1;
  fetchServise.query = e.currentTarget.elements.query.value;
  fetchServise.searchImageFetch().then(data => {
    refs.gallery.innerHTML = murkup(data.hits);
  });
  refs.moreBtn.classList.contains('is-hidden')
    ? refs.moreBtn.classList.toggle('is-hidden')
    : '';
};

const moreImage = function (e) {
  fetchServise.page += 1;
  fetchServise.searchImageFetch().then(data => {
    refs.gallery.insertAdjacentHTML('beforeend', `${murkup(data.hits)}`);
  });
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 1000);
};

refs.serchQueryForm.addEventListener('submit', searchQuery);
refs.moreBtn.addEventListener('click', moreImage);
