import trashIcon from '../img/global/icons.svg#trash';
const empty = document.querySelector('.shopping-list-empty');
const list = document.querySelector('.js-shop-list');

const LS_KEY = 'user-shopping-list';
const shopArr = JSON.parse(localStorage.getItem(LS_KEY));
console.log('shopArr', shopArr);
console.log(shopArr.length);
if (shopArr.length === 0) {
  empty.classList.remove('hidden');
}

const pagination = document.querySelector('.pagination');
pagination.classList.add('hidden-pagination');

const prev = document.querySelector('.prev');
prev.disabled = true;

const next = document.querySelector('.next');

const doublePrev = document.querySelector('.double-prev');
doublePrev.disabled = true;

const doubleNext = document.querySelector('.double-next');

const buttonsNumbers = document.querySelector('.buttons-numbers');

const perPage = 4;
let currentPage = 1;

function createMarkup(arr, page = 1, perPage = 4) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const itemsRender = arr.slice(start, end);

  return itemsRender
    .map(
      ({
        _id,
        list_name,
        amazon_product_url,
        author,
        book_image,
        book_uri,
        contributor,
        description,
        publisher,
        title,
      }) => `<li data-id="${_id}" class="shopping-list-card js-trash">
            <div class="shopping-list-card-flex"><img class="list-card-img" src="${book_image}" alt="${author}">
              <div>
                <div class="shop-trash-flex">
                  <div>
                    <h3 class="list-card-title">${title}</h3>
                    <p class="list-card-subtitle">${list_name}</p>
                  </div>
                  <div class="shop-trash-bg js-test">
                    <svg class="shop-trash">
                      <use href="${trashIcon}"></use>
                    </svg>
                  </div>
                 </div>
                <div class="shop-text-flex">
                 <p class="list-card-text">${description}</p>
                  <div class="list-card-flex">
                    <p class="list-card-contributor">${contributor}</p>
                    <div class="list-card-icon-flex">
                      <a class="list-card-amazon-url" href="${amazon_product_url}"></a>
                      <a class="list-card-book-url" href="${book_uri}"></a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </li>`
    )
    .join('');
}

function renderPage(arr, page, perPage) {
  const markup = createMarkup(arr, page, perPage);
  list.innerHTML = markup;

  if (arr.length === 0) {
    pagination.classList.add('hidden-pagination');
  } else {
    pagination.classList.remove('hidden-pagination');
  }

  if (arr.length <= perPage) {
    pagination.classList.add('hidden-pagination');
  } else {
    pagination.classList.remove('hidden-pagination');
  }

  const totalPages = Math.ceil(arr.length / perPage);

  if (totalPages <= 2) {
    doublePrev.classList.add('hidden-pagination');
    doubleNext.classList.add('hidden-pagination');
  } else {
    doublePrev.classList.remove('hidden-pagination');
    doubleNext.classList.remove('hidden-pagination');
  }
}

function renderButtonsPagination(arr) {
  const totalPages = Math.ceil(arr.length / perPage);

  buttonsNumbers.innerHTML = '';

  for (let i = 1; i <= totalPages; i += 1) {
    const button = document.createElement('button');
    button.classList.add('bth-num');
    button.textContent = i;
    buttonsNumbers.appendChild(button);

    if (i === currentPage) {
      button.classList.add('bth-active');
    }

    button.addEventListener('click', () => {
      currentPage = i;

      renderPage(arr, currentPage, perPage);
      updateButtonsVisibility();
      updateActiveClass();

      if (currentPage === 1) {
        prev.disabled = true;
        doublePrev.disabled = true;
      } else {
        prev.disabled = false;
        doublePrev.disabled = false;
      }

      if (currentPage === totalPages) {
        next.disabled = true;
        doubleNext.disabled = true;
      } else {
        next.disabled = false;
        doubleNext.disabled = false;
      }
    });
  }

  updateButtonsVisibility();
  updateActiveClass();
}

function updateActiveClass() {
  const allButtons = document.querySelectorAll('.bth-num');

  allButtons.forEach((button, index) => {
    const isActivePage = index + 1 === currentPage;

    if (isActivePage) {
      button.classList.add('bth-active');
      button.disabled = true;
    } else {
      button.classList.remove('bth-active');
      button.disabled = false;
    }
  });
}

function updateButtonsVisibility() {
  const allButtons = document.querySelectorAll('.bth-num');
  const totalPages = Math.ceil(shopArr.length / perPage);

  allButtons.forEach((button, index) => {
    if (currentPage === 1) {
      if (index + 1 <= 3) {
        button.classList.remove('hidden-pagination');
      } else {
        button.classList.add('hidden-pagination');
      }
    } else if (currentPage === totalPages) {
      if (index + 1 > totalPages - 3) {
        button.classList.remove('hidden-pagination');
      } else {
        button.classList.add('hidden-pagination');
      }
    } else {
      if (
        index + 1 === currentPage ||
        index + 2 === currentPage ||
        index === currentPage
      ) {
        button.classList.remove('hidden-pagination');
      } else {
        button.classList.add('hidden-pagination');
      }
    }
  });
}

renderPage(shopArr, currentPage, perPage);
renderButtonsPagination(shopArr);

prev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;

    renderPage(shopArr, currentPage, perPage);
    updateButtonsVisibility();
    updateActiveClass();
  }

  if (currentPage === 1) {
    prev.disabled = true;
    doublePrev.disabled = true;
  }

  next.disabled = false;
  doubleNext.disabled = false;
});

next.addEventListener('click', () => {
  const totalPages = Math.ceil(shopArr.length / perPage);
  if (currentPage < totalPages) {
    currentPage += 1;

    renderPage(shopArr, currentPage, perPage);
    updateButtonsVisibility();
    updateActiveClass();
  }

  if (currentPage === totalPages) {
    next.disabled = true;
    doubleNext.disabled = true;
  }

  prev.disabled = false;
  doublePrev.disabled = false;
});

doublePrev.addEventListener('click', () => {
  currentPage = 1;

  renderPage(shopArr, currentPage, perPage);
  updateButtonsVisibility();
  updateActiveClass();

  prev.disabled = true;
  next.disabled = false;

  doublePrev.disabled = true;
  doubleNext.disabled = false;
});

doubleNext.addEventListener('click', () => {
  const totalPages = Math.ceil(shopArr.length / perPage);

  currentPage = totalPages;

  renderPage(shopArr, currentPage, perPage);
  updateButtonsVisibility();
  updateActiveClass();

  next.disabled = true;
  doubleNext.disabled = true;

  prev.disabled = false;
  doublePrev.disabled = false;
});

list.addEventListener('click', handlerShop);

function handlerShop(e) {
  if (
    e.target.classList.value === 'shop-trash-bg js-test' ||
    e.target.classList.value === 'shop-trash'
  ) {
    const currentProduct = e.target.closest('.js-trash');
    const idBook = currentProduct.dataset.id;

    const confirmProduct = confirm(`Remove book?`);

    if (confirmProduct) {
      const product = shopArr.findIndex(({ _id: id }) => id === idBook);
      shopArr.splice(product, 1);

      localStorage.setItem(LS_KEY, JSON.stringify(shopArr));

      list.innerHTML = createMarkup(shopArr);
      if (shopArr.length === 0) {
        empty.classList.remove('hidden');
      }
    }
  }
}
