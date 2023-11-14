const refs = {
  catList: document.querySelector('.categoriesList'),
  catListItem: document.querySelector('.categoriesList'),

  bestSellersPartName: document.querySelector('.bestSellersPartName'),
  partCardsPage: document.querySelector('.partCardsList'),
  btnSeeMore: document.querySelector('.btnBestSellersSeeMore'),
  cardsBookSmall: document.querySelector('.photo-card'),
  //   shoppingList: document.querySelector('.js-shop-list'),

  btnAddtoShList: document.querySelector('.btn-addto-card'),
  btnRemoveShList: document.querySelector('.btn-remove-card'),

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
  const currentBook = e.target.closest('.part-cards-list-itemcat');
  const currentCategory = e.target.closest('.btnBestSellersSeeMore');

  if (currentBook) {
    let bookId = currentBook.id;
    bookDetail(bookId);
  }
  if (currentCategory) {
    let bookCat = currentCategory.getAttribute('category');
    selectedCategory = bookCat;
    booksSelectedCategory(selectedCategory);
    console.log(bookCat);
  }
  return;
}
// //////////////////////////////////////////////////////////////

// // ---->>>>>>   Детальна інформація про книгу  <<<<<<-----//??????????????????????????????
async function bookDetail(bookId) {
  return await fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then(resp => {
      //     console.log([resp]);
      creatMarkupBook([resp]);
    })
    .catch(err => console.log(err));
}

function creatMarkupBook(respArr) {
  // console.log(respArr);
  const infoBuyLinks = respArr[0].buy_links
    .map(
      ({ name, url }) =>
        `
     <div class="boxMarketPlace">
     <a href="${url}" class="infoMarketPlace" target="_blank"><b>${name}</b></a>
     </div>
       `
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
       <button class="btn-close-infobook">X</button>
             <img class="images-photo" src="${book_image}"
              alt="${title}" loading="lazy" hight="281" />
                <div class="info">
                   <p class="info-title"><b>${title}</b></p>
                   <p class="info-author"><b>${author}</b></p>
                   <p class="info-buy_links"><b>${infoBuyLinks}</b></p>
                   <p class="info-description">${description}</p>
                   <button class="btn-addto-card">Add to shopping list</button>
                   <button class="btn-remove-card hidden">Remove from the shopping list</button>
                </div>
       </div>
       `
    )
    .join('');

  refs.bookPage.innerHTML = pageMarkupBook;
  refs.bookPage.classList.remove('hidden');
  refs.bdropPopup.classList.remove('hidden');
  refs.backdropBlock.classList.add('backdrop-block');
  //    refs.bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);
}
// //////////////////////////////////////////////////////////////

refs.bookPage.addEventListener('click', onClickBookInfo);
function onClickBookInfo(e) {
  const btnAddtoCard = e.target.closest('.btn-addto-card');
  const btnRemoveCard = e.target.closest('.btn-remove-card');
  const btnCloseBookPage = e.target.closest('.btn-close-infobook');
  if (btnAddtoCard) {
    console.log('btnAddtoCard');
    refs.btnAddtoCard.classList.add('hidden');

    //   console.log(refs.btnRemoveShList);
    //   refs.btnRemoveShList.classList.remove('hidden');
  }
  if (btnRemoveCard) {
    refs.btnAddtoCard.classList.remove('hidden');
    refs.btnRemoveCard.classList.add('hidden');
    console.log('btnRemoveCard');
  }
  if (btnCloseBookPage) {
    refs.backdropBlock.classList.remove('backdrop-block');
    refs.bookPage.classList.add('hidden');
    refs.bdropPopup.classList.add('hidden');
  }
  return;
}

//********************************Modal window *****************************************/

const books = document.querySelector('.modal-pop-up-content');

const BOOK_KEY = 'popup-menu';
const elements = [
  {
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_url: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    title: 'SPARE',
    imgAmazon: './img/shopping/am_grey.png',
  },
];

localStorage.setItem(BOOK_KEY, JSON.stringify(elements));
const shopArr = JSON.parse(localStorage.getItem(BOOK_KEY));
books.insertAdjacentHTML('beforeend', createMarkup(shopArr));

function createMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        author,
        title,
        description,
        amazon_product_url,
        book_url,
        imgAmazon,
        imgBook = './img/shopping/book_grey.png',
      }) => ` <img class="modal-img" src="${book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${title}</p>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-desc">${description}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img class="modal-shop-img shopping-shopimg amazon" src="${imgAmazon}" alt="Amazon link" aria-label="Buy this book on Amazon" />
        </a>
        <a class="modal-shop-link" href="${book_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
          <img class="modal-shop-img shopping-shopimg apple" src="${imgBook}" alt="Apple Books link"  aria-label="Buy this book on Apple Books"/>
        </a>
      </div>
    </div>`
    )
    .join('');
}
