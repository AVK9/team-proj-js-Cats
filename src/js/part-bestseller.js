import Notiflix from 'notiflix';
import axios from 'axios';
const mainContentPage = document.querySelector('.main-content-page');
const numberBlocksPage = 18;
const catList = document.querySelector('.categories-list');
const BASEURL = 'https://books-backend.p.goit.global';
const ALLCAT = '/books/top-books';

async function getAllBestCategory() {
  try {
    const allBestCategory = await axios.get(`${BASEURL}${ALLCAT}`);

    createPageAllBooks(allBestCategory.data);
    return allBestCategory.data;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error');
  }
}

await getAllBestCategory()
  .then(data => {
    createPageAllBooks(data);
  })
  .catch(err => console.log(err));

function createPageAllBooks(respArr) {
  const headPage = `<h1 class="head-main-h">Best Sellers
  <span class="head-main-h head-main-hdecor">
  Books
  </span>
   </h1>`;
  let partBoxAllBooks = '';
  let pageAllBooks = '';

  for (let i = 0; i < numberBlocksPage; i++) {
    let categoryName = respArr[i].list_name;
    let categoryArr = respArr[i].books;

    const pageMarkupAllBooks = categoryArr
      .map(
        ({ _id, author, book_image, title }) => `
      <li class="part-cards-list-item" id="${_id}" >
         <img class="images-prev" src="${book_image}" alt="${title}" width ='180'>
         <p class="info-item-title">${title}</p>
         <p class="info-item-author">${author}</p>
      </li>
       `
      )
      .join('');

    partBoxAllBooks = `<div class="best-sellers-group">
      <div class="bestellers-part">
              <p class="bestsellers-part-name">${categoryName}</p>
              <ul class="part-cards-list">
                  ${pageMarkupAllBooks}
              </ul>
          </div></div>
          <button class="btn-best-seemore" category = "${categoryName}">See More</button>
      `;
    pageAllBooks += partBoxAllBooks;
  }
  const allPartToBox = `<div class="all-part-to-box">${pageAllBooks}</div>`;

  mainContentPage.innerHTML = headPage + allPartToBox;
}

catList.firstElementChild.addEventListener('click', onSwitchBestSeller);

function onSwitchBestSeller(e) {
  if (e.target === catList.firstElementChild) {
    getAllBestCategory();
  } else {
    return e.currentTarget;
  }
}
