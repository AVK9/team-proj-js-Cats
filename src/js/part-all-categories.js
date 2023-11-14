import Notiflix from 'notiflix';
import listCategory from './axios'
// import allBooksBackend from './axios'

 const mainContentPage = document.querySelector('.main-content-page');
const numberBlocksPage = 4;

const catList = document.querySelector('.categories-list');
listCategory()
    .then(resp => {
        markupCatList(resp);

    })
    .catch(error => {
        Notiflix.Notify.failure('Error');
        console.log(error)
    });

function markupCatList(respArr) {
    const categoriesList = respArr.map(({ list_name }
    ) => `
       <li class="category-item">${list_name}</li>
       `).join("");
    const itemFirstEl = '<li class="category-item category-item-firstelm">All categories</li>';
    catList.innerHTML = itemFirstEl + categoriesList;
    const catFirstElement = document.querySelector('.category-item-firstelm');
    // console.log(catFirstElement);
    catFirstElement.classList.add('category-active');
}
////////////////////////////////////////////////////////////

// async function allBooksBackend() {
//     const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
//     return await fetch(`${BASE_URL}`)
//        .then((resp) => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }
// //---------------------------

// await allBooksBackend()
//     .then((data) => {
//       console.log(data);
//        createPageAllBooks(data);
//   })
//     .catch((err) => console.log(err));
        

    
// function createPageAllBooks(respArr) {
//     const headPage = `<h1 class="head-main-h">Best Sellers
//   <span class="head-main-h head-main-hdecor">
//   Books
//   </span>
//    </h1>`;
//     let partBoxAllBooks = '';
//     let pageAllBooks = '';
// console.log(respArr);
//     for (let i = 0; i < numberBlocksPage; i++) {
//     let categoryName = respArr[i].list_name;
//     let categoryArr = respArr[i].books;
//     console.log(categoryArr);
    
//     const pageMarkupAllBooks = categoryArr.map(({ _id,
//         author,
//         book_image,
//         title,}
//    ) => `
//       <li class="part-cards-list-item" id="${_id}" >
//          <img class="images-prev" src="${book_image}" alt="${title}" width ='180'>
//          <p class="info-item-title">${title}</p>
//          <p class="info-item-author">${author}</p>
//       </li>
//        `).join("");
    
//       partBoxAllBooks =
//       `<div class="best-sellers-group">
//       <div class="bestellers-part">
//               <p class="bestsellers-part-name">${categoryName}</p>
//               <ul class="part-cards-list">
//                   ${pageMarkupAllBooks}
//               </ul>
//           </div></div>
//           <button class="btn-best-seemore" category = "${categoryName}">See More</button>
//       `
//         pageAllBooks += partBoxAllBooks;
//   }
//   const allPartToBox= `<div class="all-part-to-box">${pageAllBooks}</div>`
//     // refs.catPage.insertAdjacentHTML('beforeend', headPage + pageAllBooks);
//     mainContentPage.innerHTML = headPage + allPartToBox;
// }


// //----------------
// catList.addEventListener('click', onFirstSwitch);
// function onFirstSwitch(e) {
//   // selectedCategory = e.target.textContent;
//   // console.log(catListItem.firstChild);
// if (e.currentTarget === e.target) {
//     return;
//   } if (catList.firstChild === e.target) {
    
//     allBooksBackend()
//     //Cюда вставить функцию H1
//     // mainContentPage.innerHTML = 'Audio Nonfiction';
//   }
// //   else {
// //   selectedCategory = e.target.textContent
// //   getSelectedCategory(selectedCategory);
// }
// // console.log(e.currentTarget);
// //   console.log(e.target);
    
    
// // };


