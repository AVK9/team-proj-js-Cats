import axios from 'axios';
import Notiflix from 'notiflix';
// import getAllBestCategory from './part-bestseller'

const BASEURL = 'https://books-backend.p.goit.global';
const CATSELECT = '/books/category?category=';

const mainContentPage = document.querySelector('.main-content-page');
let selectedCategory = '';
const catListItem = document.querySelector('.categories-list');
const catList = document.querySelector('.categories-list');
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  function temp() {
//    getSelectedCategory('Audio Nonfiction');
// };temp();
//  function  temp2() {
//   const headmainh = `<h1 class="head-main-h">Best Sellers
//   <span class="head-main-h head-main-hdecor">
//   Books
//   </span>
//    </h1>`;
//   mainContentPage.insertAdjacentHTML('afterbegin', headmainh)
// };
// setTimeout(temp2, 600)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

catListItem.addEventListener('click', onCategoriesSwitch);
function onCategoriesSwitch(e) {
  const clickedCategory = e.target.textContent.trim();

  if (clickedCategory === selectedCategory) {
    return;
  }

  const activeCategory = document.querySelector('.category-active');
  if (activeCategory) {
    activeCategory.classList.remove('category-active');
  }

  if (clickedCategory === catListItem.firstChild) {
    selectedCategory = catListItem.firstChild;
    getSelectedCategory(selectedCategory);
  } else {
    e.target.classList.add('category-active');
    selectedCategory = clickedCategory;
    getSelectedCategory(selectedCategory);
  }
}

export default async function getSelectedCategory(selectedCategory) {
  try {
    const booksSelectedCategory = await axios.get(
      `${BASEURL}${CATSELECT}${selectedCategory}`
    );
    onSelectedCategory(booksSelectedCategory.data);
    return booksSelectedCategory.data;
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Error');
  }
}

function onSelectedCategory(respArr) {
  let headMaidCss;

  function headMaker(category) {
    // const category = "Combined Print and E-Book Nonfiction";
    const fixLast = category.length - category.lastIndexOf(' ');
    const lastWorld = category.substring(category.length - fixLast);
    let lengthFirstPart = category.length - lastWorld.length;
    const firstPartLenght = category - lengthFirstPart;
    const firstPart = category.slice(0, lengthFirstPart);
    // console.log(firstPart);
    // console.log(lastWorld);
    return (headMaidCss = `<h1 class="head-main-h">${firstPart}
  <span class="head-main-h head-main-hdecor">
  ${lastWorld}
  </span>
   </h1>`);
  }
  headMaker(selectedCategory);
  //  console.log(headMaidCss);

  const markupSelectedCategory = respArr
    .map(
      ({
        author,
        book_image,
        description,
        amazon_product_url,
        title,
        list_name,
        _id,
      }) => `
       <li class="part-cards-list-itemcat" id="${_id}">
             <img class="images-prevcat" src="${book_image}"
              alt="${title}" width ='180' loading="lazy" />
                <div class="info">
                   <p class="info-item-title"><b>${title}</b></p>
                   <p class="info-item-author"><b>${author}</b></p>
             </div>
       </li>
       `
    )
    .join('');
  const contentPageCat = `${headMaidCss}
<ul class="main-content-listcat">
    ${markupSelectedCategory}
</ul>`;
  mainContentPage.innerHTML = contentPageCat;
}

// // На стр. BestSellers вікриваемо інфо про книгу або відрацьовуемо клік по кнопці SeeMore
mainContentPage.addEventListener('click', onBookSwitch);

function onBookSwitch(e) {
  const currentCategory = e.target.closest('.btn-best-seemore');
  // console.log(currentCategory);

  if (currentCategory) {
    let bookCat = currentCategory.getAttribute('category');
    console.log(bookCat);
    selectedCategory = bookCat;

    const categories = catListItem.children;
    for (let category of categories) {
      const categoryText = category.textContent.trim();
      if (categoryText === selectedCategory) {
        category.classList.add('category-active');
      } else {
        category.classList.remove('category-active');
      }
    }

    getSelectedCategory(selectedCategory);
  }
  return;
}
// //////////////////////////////////////////////////////
