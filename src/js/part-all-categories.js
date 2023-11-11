import Notiflix from 'notiflix';
import listCategory from './axios'
// import allBooksBackend from './axios'

 const mainContentPage = document.querySelector('.main-content-page');
const numberBlocksPage = 2;

const catList = document.querySelector('.categoriesList');
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
       <li class="categoryItem">${list_name}</li>
       `).join("");
    const itemFirstEl = '<li class="categoryItem">All categories</li>';
    catList.innerHTML = itemFirstEl + categoriesList;
}
////////////////////////////////////////////////////////////

//  async function allBooksBackend() {
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
//       <div class="partCardsListItem photo-card" id="${_id}" >
//          <img class="imgBestSellersItem images-prev" src="${book_image}" alt="${title}" width ='180'>
//          <p class="nameBestSellersItem info-item-title">${title}</p>
//          <p class="authorBestSellersItem info-item-author">${author}</p>
//       </div>
//        `).join("");
    
//       partBoxAllBooks =
//       ` <div class="bestSellersPart">
//               <p class="bestSellersPartName">${categoryName}</p>
//                  <div class="bestSellersPartCards">
//                    <div class="partCardsList main-content-list">
//                    ${pageMarkupAllBooks}
//                    </div>
//                  </div>
//           </div>
//           <button class="btnBestSellersSeeMore" category = "${categoryName}">See More</button>
//       `
//         pageAllBooks += partBoxAllBooks;
//     }
//     // refs.catPage.insertAdjacentHTML('beforeend', headPage + pageAllBooks);
//     mainContentPage.innerHTML = headPage + pageAllBooks;
// }
