const refs = {
    catList: document.querySelector('.categoriesList'),
    catListItem: document.querySelector('.categoriesList'),
    

    bestSellersPartName: document.querySelector('.bestSellersPartName'),
    partCardsPage: document.querySelector('.partCardsList'),
    btnSeeMore: document.querySelector('.btnBestSellersSeeMore'),
    cardsBookSmall: document.querySelector('.photo-card'),
    shoppingList: document.querySelector('.shoppingList'),
    btnAddtoShList: document.querySelector('.btnAddtoCard'),
    btnRemoveShList: document.querySelector('.btnRemoveCard'),







    bdropPopup: document.querySelector('.backdrop-popup-menu'),
    backdropBlock: document.querySelector('.wrapper'),
    btnCloseInfoBook: document.querySelector('.btn-close-infobook'),
    bookPage: document.querySelector('.box-popup-menu'),
    catPage: document.querySelector('.main-content-page'),
};


// // На стр. BestSellers вікриваемо інфо про книгу або відрацьовуемо клік по кнопці SeeMore
       refs.catPage.addEventListener('click', onBookSwitch);

function onBookSwitch(e) {
      // const currentBook = e.target.closest(".photo-card")
       const currentBook = e.target.closest(".part-cards-list-itemcat")
    const currentCategory = e.target.closest(".btnBestSellersSeeMore")

    if (currentBook) {
        let bookId = currentBook.id;
        bookDetail(bookId);
    } if (currentCategory) {
        let bookCat = currentCategory.getAttribute("category");
        selectedCategory = bookCat;
        booksSelectedCategory(selectedCategory);
        console.log(bookCat);
     }return
};
// //////////////////////////////////////////////////////////////


// // ---->>>>>>   Детальна інформація про книгу  <<<<<<-----//??????????????????????????????
async function bookDetail(bookId) {
    return await fetch(`https://books-backend.p.goit.global/books/${bookId}`)
       .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
           }
          return resp.json();
       })
        .then((resp) => {  
              
//     console.log([resp]);
    creatMarkupBook([resp])
  })
        .catch((err) => console.log(err));
}


function creatMarkupBook(respArr) {
// console.log(respArr);
const infoBuyLinks = respArr[0].buy_links.map(({name, url }) =>
     `
     <div class="boxMarketPlace">
     <a href="${url}" class="infoMarketPlace" target="_blank"><b>${name}</b></a>
     </div>
       `).join("");

    const pageMarkupBook = respArr.map(({
        author,
        book_image,
        description,
        buy_links: [{ name, url }],
        buy_links,
        title,
        list_name,
        _id,
    }
   ) => `
       <div class="photo-card" id="${_id}">
       <button class="btn-close-infobook">X</button>
             <img class="images" src="${book_image}"
              alt="${title}" loading="lazy" />
                <div class="info">
                   <p class="info-title"><b>${title}</b></p>
                   <p class="info-author"><b>${author}</b></p>
                   <p class="info-buy_links"><b>${infoBuyLinks}</b></p>
                   <p class="info-description">${description}</p>
                   <button class="btnAddtoCard">Add to shopping list</button>
                   <button class="btnRemoveCard hidden">Remove from the shopping list</button>
                </div>
       </div>
       `).join("");

      refs.bookPage.innerHTML = pageMarkupBook;
      refs.bookPage.classList.remove('hidden');
      refs.bdropPopup.classList.remove('hidden')
      refs.backdropBlock.classList.add('backdrop-block')
//    refs.bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);
}
// //////////////////////////////////////////////////////////////



refs.bookPage.addEventListener('click', onClickBookInfo);
function onClickBookInfo(e) { 
   





    
    const btnAddtoCard = e.target.closest(".btnAddtoCard")
    const btnRemoveCard = e.target.closest(".btnRemoveCard")
    const btnCloseBookPage = e.target.closest(".btn-close-infobook")
    if (btnAddtoCard) {
        console.log('btnAddtoCard');
        console.log(refs.btnRemoveShList);
        // refs.btnRemoveShList.classList.remove('hidden');
        //  refs.btnAddtoCard.classList.add('hidden')

    } if (btnRemoveCard) {
        // refs.btnAddtoCard.classList.remove('hidden')
        // refs.btnRemoveCard.classList.add('hidden')
    console.log('btnRemoveCard');
      } if (btnCloseBookPage) {
          refs.backdropBlock.classList.remove('backdrop-block')
          refs.bookPage.classList.add('hidden');
          refs.bdropPopup.classList.add('hidden')
          
     }return



};