import axios from "axios";
import Notiflix from 'notiflix';
const BASEURL = 'https://books-backend.p.goit.global';
const CATSELECT = '/books/category?category=';

const mainContentPage = document.querySelector('.main-content-page');
let selectedCategory;
const catListItem = document.querySelector('.categoriesList');

catListItem.addEventListener('click', onCategoriesSwitch);
function onCategoriesSwitch(e) {
    selectedCategory = e.target.textContent;
    // console.log(selectedCategory);
    getSelectedCategory(selectedCategory);
};

async function getSelectedCategory(selectedCategory) {
 
 try {
     const booksSelectedCategory = await axios.get(`${BASEURL}${CATSELECT}${selectedCategory}`);
     onSelectedCategory(booksSelectedCategory.data)
     return booksSelectedCategory.data
  }
  catch (error) {
     console.error(error);
     Notiflix.Notify.failure('Error');
  }
};

 function onSelectedCategory(respArr) {
   const markupSelectedCategory = respArr.map(({
        author,
        book_image,
        description,
        amazon_product_url,
        title,
        list_name,
        _id,
    }
   ) => `
       <li class="photo-card" id="${_id}">
             <img class="images-prev" src="${book_image}"
              alt="${title}" width ='180' loading="lazy" />
                <div class="info">
                   <p class="info-itemt-itle"><b>${title}</b></p>
                   <p class="info-item-author"><b>${author}</b></p>
             </div>
       </li>
       `).join("");
     const contentPageCat = `<h1 class="head-main-h">${selectedCategory}</h1>
<ul class="main-content-list">
    ${markupSelectedCategory}
</ul>`;
     mainContentPage.innerHTML = contentPageCat;
}

