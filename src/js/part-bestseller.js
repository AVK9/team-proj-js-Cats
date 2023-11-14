import axios from "axios";
import Notiflix from 'notiflix';
const BASEURL = 'https://books-backend.p.goit.global';
const ALLCAT = '/books/top-books';
const catList = document.querySelector('.categories-list');

const mainContentPage = document.querySelector('.main-content-page');
const numberBlocksPage = 4;
 
 async function getAllBestCategory() {
  try {
    const allBestCategory = await axios.get(`${BASEURL}${ALLCAT}`);
    // console.log(AllBestCategory);
    return allBestCategory.data;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error');
  }
}

catList.addEventListener('click', onFirstSwitch);
let selectedCategory = '';
function onFirstSwitch(e) {
    selectedCategory = e.target.textContent;
    console.log(selectedCategory);
//   console.log(catList.firstChild);
// if (e.currentTarget === e.target) {
//     return;
//     }
    
    if (e.target.textContent === 'All categories') {
    console.log(selectedCategory);
        getAllBestCategory();
    //Cюда вставить функцию H1
    // mainContentPage.innerHTML = 'Audio Nonfiction';
  } return
//   else {
//   selectedCategory = e.target.textContent
//   getAllBestCategory()
//     }

}

 getAllBestCategory()
  .then(data => {
    // console.log(data);
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
// console.log(respArr);
    for (let i = 0; i < numberBlocksPage; i++) {
    let categoryName = respArr[i].list_name;
    let categoryArr = respArr[i].books;
    // console.log(categoryArr);
    
    const pageMarkupAllBooks = categoryArr.map(({ _id,
        author,
        book_image,
        title,}
   ) => `
      <li class="part-cards-list-item" id="${_id}" >
         <img class="images-prev" src="${book_image}" alt="${title}" width ='180'>
         <p class="info-item-title">${title}</p>
         <p class="info-item-author">${author}</p>
      </li>
       `).join("");
    
      partBoxAllBooks =
      `<div class="best-sellers-group">
      <div class="bestellers-part">
              <p class="bestsellers-part-name">${categoryName}</p>
              <ul class="part-cards-list">
                  ${pageMarkupAllBooks}
              </ul>
          </div></div>
          <button class="btn-best-seemore" category = "${categoryName}">See More</button>
      `
        pageAllBooks += partBoxAllBooks;
  }
  const allPartToBox= `<div class="all-part-to-box">${pageAllBooks}</div>`
    // refs.catPage.insertAdjacentHTML('beforeend', headPage + pageAllBooks);
    mainContentPage.innerHTML = headPage + allPartToBox;
}


