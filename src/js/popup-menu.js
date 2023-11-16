const appStore1 = '/img/shopping/book_grey.png';
const amazonImg1 = '/img/shopping/am_grey.png';

const refs = {
  catList: document.querySelector('.categoriesList'),
  catListItem: document.querySelector('.categoriesList'),
  bestSellersPartName: document.querySelector('.bestSellersPartName'),
  partCardsPage: document.querySelector('.partCardsList'),
  btnSeeMore: document.querySelector('.btnBestSellersSeeMore'),
  cardsBookSmall: document.querySelector('.photo-card'),
  popupMenuConttent: document.querySelector('.popup-menu-conttent'),
  btnAddtoShList: document.querySelector('.btn-addto-card'),
  pAddtoCardCongrat: document.querySelector('.addto-card-congrat'),
  btnRemoveShList: document.querySelector('.btn-remove-card'),
  bdropPopup: document.querySelector('.backdrop-popup-menu'),
  backdropBlock: document.querySelector('.wrapper'),
  btnCloseInfoBook: document.querySelector('.btn-close-infobook'),
  bookPage: document.querySelector('.box-popup-menu'),
  catPage: document.querySelector('.main-content-page'),
};
const STORAGE_KEY = 'user-shopping-list';
let shoppingList = [];

refs.catPage.addEventListener('click', onBookSwitch);

function onBookSwitch(e) {
  const currentBook = e.target.closest('.part-cards-list-itemcat');
  const currentBookBest = e.target.closest('.part-cards-list-item');

  if (currentBook) {
    let bookId = currentBook.id;
    bookDetail(bookId);
  }
  if (currentBookBest) {
    let bookId = currentBookBest.id;
    bookDetail(bookId);
  }
  return;
}

async function bookDetail(bookId) {
  return await fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then(resp => {
      creatMarkupBook([resp]);
    })
    .catch(err => console.log(err));
}

let userBookAdd = [];

function auditID() {
  let [{ _id }] = userBookAdd;
  let boolBook = false;
  const userTestBookLS = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  userTestBookLS.find(({ _id: idU }) => {
    if (idU === _id) {
      return (boolBook = true);
    }
  });
  return boolBook;
}

function creatMarkupBook(respArr) {
  userBookAdd = respArr;
  const infoBuyLinks = respArr[0].buy_links
    .map(
      ({ name, url }) =>
        `<div class="boxMarketPlace">
         <a href="${url}" class="infoMarketPlace" target="_blank"><b>${name}</b></a>
       </div>`
    )
    .join('');

  const pageMarkupBook = respArr
    .map(
      ({
        author,
        book_image,
        description,
        buy_links: [{ name, url }],
        buy_links,
        title,
        list_name,
        _id,
      }) => `
      <div class="photo-card" id="${_id}">
        <img class="images-photo" src="${book_image}" alt="${title}" loading="lazy" height="281" />
        <div class="info">
          <h2 class="info-title">${title}</h2>
          <p class="info-author">${author}</p>
          <p class="info-description">${description}</p>
          <div class="info-buy-links">
            <a href="${url}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
              <img class="link-img" src="${amazonImg1}" alt="Amazon link" aria-label="Buy this book on Amazon" />
            </a>
            <a href="${url}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="AppleBook link">
              <img class="link-img" src="${appStore1}" alt="Apple Books link" aria-label="Buy this book on Apple Books" />
            </a>
          </div>
        </div>
      </div>`
    )
    .join('');

  let auditIdBook = auditID();

  if (auditIdBook) {
    refs.btnAddtoShList.classList.add('hidden');
    refs.btnRemoveShList.classList.remove('hidden');
  } else {
    refs.btnAddtoShList.classList.remove('hidden');
  }

  refs.popupMenuConttent.innerHTML = pageMarkupBook;
  refs.bookPage.classList.remove('is-hidden');
  refs.bdropPopup.classList.remove('is-hidden');
  refs.backdropBlock.classList.add('backdrop-block');
}

let userBookAddStor = [];

refs.btnCloseInfoBook.addEventListener('click', onClickClosefoBook);

function onClickClosefoBook() {
  refs.backdropBlock.classList.remove('backdrop-block');
  refs.bookPage.classList.add('is-hidden');
  refs.bdropPopup.classList.add('is-hidden');
  refs.pAddtoCardCongrat.classList.add('hidden');
  refs.btnRemoveShList.classList.add('hidden');
  refs.btnAddtoShList.classList.remove('hidden');
}

refs.btnAddtoShList.addEventListener('click', onClickAddtoShList);
refs.btnRemoveShList.addEventListener('click', onClickRemoveShList);

function onClickAddtoShList() {
  refs.btnAddtoShList.classList.add('hidden');
  refs.pAddtoCardCongrat.classList.remove('hidden');
  refs.btnRemoveShList.classList.remove('hidden');

  let [{ _id }] = userBookAdd;
  let boolBook = false;
  shoppingList.find(({ _id: idU }) => {
    if (idU === _id) {
      return (boolBook = true);
    }
  });

  if (boolBook) {
    return;
  }

  shoppingList.push(...userBookAdd);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
  shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function onClickRemoveShList() {
  refs.btnAddtoShList.classList.remove('hidden');
  refs.pAddtoCardCongrat.classList.add('hidden');
  refs.btnRemoveShList.classList.add('hidden');

  shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  let [{ _id: idBook }] = userBookAdd;
  const product = shoppingList.findIndex(({ _id: id }) => id === idBook);

  if (product !== -1) {
    shoppingList.splice(product, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
    refs.btnAddtoShList.classList.remove('hidden');
    refs.btnRemoveShList.classList.add('hidden');
  } else {
    return;
  }
}

refs.bdropPopup.addEventListener('click', onClickBackdrop);

function onClickBackdrop(event) {
  if (event.target === refs.bdropPopup) {
    closeBookPage();
  }
}

document.addEventListener('keydown', onEscPress);

function onEscPress(event) {
  if (event.key === 'Escape') {
    closeBookPage();
  }
}

function closeBookPage() {
  refs.backdropBlock.classList.remove('backdrop-block');
  refs.bookPage.classList.add('is-hidden');
  refs.bdropPopup.classList.add('is-hidden');
  refs.pAddtoCardCongrat.classList.add('hidden');
  refs.btnRemoveShList.classList.add('hidden');
  refs.btnAddtoShList.classList.remove('hidden');
}

// const appStore1 = '/img/shopping/book_grey.png';
// const amazonImg1 = '/img/shopping/am_grey.png';

// const refs = {
//   catList: document.querySelector('.categoriesList'),
//   catListItem: document.querySelector('.categoriesList'),

//   bestSellersPartName: document.querySelector('.bestSellersPartName'),
//   partCardsPage: document.querySelector('.partCardsList'),
//   btnSeeMore: document.querySelector('.btnBestSellersSeeMore'),
//   cardsBookSmall: document.querySelector('.photo-card'),
//   //   shoppingList: document.querySelector('.js-shop-list'),

//   popupMenuConttent: document.querySelector('.popup-menu-conttent'),
//   btnAddtoShList: document.querySelector('.btn-addto-card'),
//   pAddtoCardCongrat: document.querySelector('.addto-card-congrat'),
//   btnRemoveShList: document.querySelector('.btn-remove-card'),

//   bdropPopup: document.querySelector('.backdrop-popup-menu'),
//   backdropBlock: document.querySelector('.wrapper'),
//   btnCloseInfoBook: document.querySelector('.btn-close-infobook'),
//   bookPage: document.querySelector('.box-popup-menu'),
//   catPage: document.querySelector('.main-content-page'),
// };
// const STORAGE_KEY = 'user-shopping-list';

// let shoppingList = [];
// // if (localStorage.getItem(STORAGE_KEY)) {
// //   shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY));
// // } else {
// //   shoppingList = [];
// // }

// // console.log(`shoppingList - ${[shoppingList]}`);

// // // На стр. BestSellers вікриваемо інфо про книгу або відрацьовуемо клік по кнопці SeeMore
// refs.catPage.addEventListener('click', onBookSwitch);

// function onBookSwitch(e) {
//   // const currentBook = e.target.closest(".photo-card")
//   const currentBook = e.target.closest('.part-cards-list-itemcat');
//   const currentBookBest = e.target.closest('.part-cards-list-item');

//   if (currentBook) {
//     let bookId = currentBook.id;
//     bookDetail(bookId);
//   }
//   if (currentBookBest) {
//     let bookId = currentBookBest.id;
//     bookDetail(bookId);

//     // let bookCat = currentCategory.getAttribute("category");
//     // selectedCategory = bookCat;
//     // booksSelectedCategory(selectedCategory);
//     // console.log(bookCat);
//   }
//   return;
// }
// // //////////////////////////////////////////////////////////////

// // // ---->>>>>>   Детальна інформація про книгу  <<<<<<-----//??????????????????????????????
// async function bookDetail(bookId) {
//   return await fetch(`https://books-backend.p.goit.global/books/${bookId}`)
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .then(resp => {
//       //   console.log([resp]);
//       creatMarkupBook([resp]);
//     })
//     .catch(err => console.log(err));
// }

// let userBookAdd = [];
// // foo для перевірки id поточної книги в локал стор -> вертає буль значення
// function auditID() {
//   let [{ _id }] = userBookAdd;
//   let boolBook = false;
//   const userTestBookLS = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

//   userTestBookLS.find(({ _id: idU }) => {
//     if (idU === _id) {
//       return (boolBook = true);
//     }
//   });
//   return boolBook;
// }

// function creatMarkupBook(respArr) {
//   userBookAdd = respArr;
//   const infoBuyLinks = respArr[0].buy_links
//     .map(
//       ({ name, url }) =>
//         `

//      <div class="boxMarketPlace">
//      <a href="${url}" class="infoMarketPlace" target="_blank"><b>${name}</b></a>
//      </div>
//        `
//     )
//     .join('');

//   const pageMarkupBook = respArr
//     .map(
//       ({
//         author,
//         book_image,
//         description,
//         buy_links: [{ name, url }],
//         buy_links,
//         title,
//         list_name,
//         _id,
//       }) => `
//        <div class="photo-card" id="${_id}">

//              <img class="images-photo" src="${book_image}"
//               alt="${title}" loading="lazy" hight="281" />
//                 <div class="info">
//                    <h2 class="info-title">${title}</h2>
//                    <p class="info-author">${author}</p>
//                    <p class="info-description">${description}</p>
//                    <div class="info-buy-links">
//                    <a href="${url}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
//                    <img class="link-img" src="${amazonImg1}" alt="Amazon link" aria-label="Buy this book on Amazon" /></a>
//                    <a href="${url}" class="info-by_links" target="_blank" rel="noopener noreferrer nofollow" aria-label="AppleBook link">
//                    <img class="link-img" src="${appStore1}" alt="Appl Books link" aria-label="Buy this book on Appl Books" /></a>
//                    </div>
//                    </div>

//        </div>
//        `
//     )
//     .join('');
//   // refs.bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);

//   // перевіряє чи є книга в локал стор і відображає коректну кнопку
//   let auditIdBook = auditID();

//   console.log(auditIdBook);
//   if (auditIdBook) {
//     refs.btnAddtoShList.classList.add('hidden');
//     refs.btnRemoveShList.classList.remove('hidden');
//   } else {
//     refs.btnAddtoShList.classList.remove('hidden');
//   }

//   refs.popupMenuConttent.innerHTML = pageMarkupBook;
//   refs.bookPage.classList.remove('is-hidden');
//   refs.bdropPopup.classList.remove('is-hidden');
//   refs.backdropBlock.classList.add('backdrop-block');
//   //    refs.bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);
// }
// // //////////////////////////////////////////////////////////////

// let userBookAddStor = [];
// // console.log(userBookAddStor);

// refs.btnCloseInfoBook.addEventListener('click', onClickClosefoBook);

// function onClickClosefoBook() {
//   refs.backdropBlock.classList.remove('backdrop-block');
//   refs.bookPage.classList.add('is-hidden');
//   refs.bdropPopup.classList.add('is-hidden');
//   refs.pAddtoCardCongrat.classList.add('hidden');
//   refs.btnRemoveShList.classList.add('hidden');
//   refs.btnAddtoShList.classList.remove('hidden');
// }

// refs.btnAddtoShList.addEventListener('click', onClickAddtoShList);
// refs.btnRemoveShList.addEventListener('click', onClickRemoveShList);

// function onClickAddtoShList() {
//   refs.btnAddtoShList.classList.add('hidden');
//   refs.pAddtoCardCongrat.classList.remove('hidden');
//   refs.btnRemoveShList.classList.remove('hidden');

//   // перевіряє чи є дана книга в локал стор
//   // console.log('userbook', userBookAdd);
//   // let [{ _id }] = userBookAdd;
//   // console.log('userBookAddStor', userBookAddStor);
//   // console.log('id', _id);
//   // let boolBook = auditID();
//   // console.log('boolBook', boolBook);
//   // console.log('boolbook', boolBook);
//   // якщо відсутня то додає в локал стор

//   let [{ _id }] = userBookAdd;
//   let boolBook = false;
//   shoppingList.find(({ _id: idU }) => {
//     if (idU === _id) {
//       return (boolBook = true);
//     }
//   });

//   if (boolBook) {
//     return;
//   }
//   console.log('shoppingList', shoppingList);
//   shoppingList.push(...userBookAdd);
//   // console.log('userBookAddStor', userBookAddStor);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
//   // console.log('userBookAddStor setitem', userBookAddStor);
//   shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   // console.log('shoppingList getitem', shoppingList);
//   // console.log('shoppingList', shoppingList);

//   // console.log(JSON.stringify(...userBookAdd));
//   // console.log(JSON.stringify(...shoppingList));

//   // const checkId = [{sadasd}, {adsad}, {dasdasdas}]
//   // const checkIasdasd = '643282b1e85766588626a0dc';

//   // console.log(checkIasdasd.includes(2));

//   // if (checkId) {
//   //       console.log(checkId);
//   // }

//   // let result = userBookAdd.filter((item) => {

//   //                  JSON.stringify(shoppingList).indexOf(JSON.stringify(item)) === -1;
//   //             });

//   // console.log(result);
// }

// function onClickRemoveShList() {
//   refs.btnAddtoShList.classList.remove('hidden');
//   refs.pAddtoCardCongrat.classList.add('hidden');
//   refs.btnRemoveShList.classList.add('hidden');

//   //видалення елементу з мас
//   shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
//   // console.log(shoppingList);
//   let [{ _id: idBook }] = userBookAdd;
//   // console.log(idBook);
//   const product = shoppingList.findIndex(({ _id: id }) => id === idBook);
//   console.log('product', product);
//   if (product !== -1) {
//     shoppingList.splice(product, 1);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
//     refs.btnAddtoShList.classList.remove('hidden');
//     refs.btnRemoveShList.classList.add('hidden');
//   } else {
//     return;
//   }
// }

// // refs.bookPage.addEventListener('click', onClickBookInfo);
// // function onClickBookInfo(e) {
// //     refs.btnAddtoCard = e.target.closest(".btn-addto-card")
// //      refs.btnRemoveCard = e.target.closest(".btn-remove-card")
// //       refs.btnCloseBookPage = e.target.closest(".btn-close-infobook")
// //       console.log(btnAddtoCard);
// //       console.log(btnRemoveCard);
// //       console.log(btnCloseBookPage);

// // //     const btnAddtoCard = e.target.closest(".btn-addto-card")
// // //     const btnRemoveCard = e.target.closest(".btn-remove-card")
// // //       const btnCloseBookPage = e.target.closest(".btn-close-infobook")

// //       console.log(object);
// //     if (btnAddtoCard) {
// //           console.log('btnAddtoCard');
// //       //     btnAddtoCard.classList.add('hidden')
// //       //     btnRemoveCard.classList.remove('hidden')
// //      refs.btnAddtoCard.hidden = true;
// //      refs.btnRemoveCard.hidden = false;

// //       //   refs.btnRemoveShList.classList.remove('hidden');

// //     } if (btnRemoveCard) {
// //       //   btnAddtoCard.classList.remove('hidden')
// //       // btnRemoveCard.classList.add('hidden')
// //     console.log('btnRemoveCard');
// //       } if (btnCloseBookPage) {
// //           refs.backdropBlock.classList.remove('backdrop-block')
// //           refs.bookPage.classList.add('hidden');
// //           refs.bdropPopup.classList.add('hidden')

// //      }return

// // // };
// // const atTheOldToad = {
// //   potions: [
// //     { name: "Speed potion", price: 460 },
// //     { name: "Dragon breath", price: 780 },
// //     { name: "Stone skin", price: 520 },
// //   ],

// //   getPotions() {
// //     return this.potions;
// //   },
// //   addPotion(newPotion) {
// //     // { name: 'blablabla', price: 200}
// //     for (const potion of this.potions) {
// //       if (potion.name === newPotion.name) {
// //         return `Error! Potion ${newPotion.name} is already in your inventory!`;
// //       }
// //     }
// //     this.potions.push(newPotion);
// //   },
// //   removePotion(potionName) {
// //     for (let i = 0; i < this.potions.length; i += 1) {
// //       if (this.potions[i].name === potionName) {
// //         this.potions.splice(i, 1);
// //         return;
// //       }
// //     }
// //     return `Potion ${potionName} is not in inventory!`;
// //   },
// //   updatePotionName(oldName, newName) {
// //     for (const potion of this.potions) {
// //       if (potion.name === oldName) {
// //         potion.name = newName;
// //         return;
// //       }
// //     }
// //     return `Potion ${oldName} is not in inventory!`;
// //   },
// //   // Change code above this line
// // };

// // // addPotion({ name: "Speed potion", price: 460 })
// // console.log(addPotion({ name: "Speed potion", price: 460 }));
