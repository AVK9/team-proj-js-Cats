// empty.classList.remove('hidden');

const empty = document.querySelector('.shopping-list-empty');
const list = document.querySelector('.js-shop-list');

const LS_KEY = 'shopping-list';
const elements = [
  {
    _id: '1',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '2',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '3',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '4',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '5',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '6',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '7',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '8',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '9',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '10',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '11',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '12',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '13',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '14',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '15',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '16',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '17',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '18',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
  {
    _id: '19',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/0593593804?tag=NYTBSREV-20',
    author: 'Prince Harry',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780593593806.jpg',
    book_uri: 'nyt://book/0db35be1-02f0-5fe8-8fdc-d4a669b5852f',
    contributor: 'by Prince Harry',
    description:
      'The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.',
    publisher: 'Random House Audio',
    title: 'SPARE',
  },
  {
    _id: '20',
    list_name: 'Audio Nonfiction',
    amazon_product_url: 'https://www.amazon.com/dp/1982185821?tag=NYTBSREV-20',
    author: 'Jennette McCurdy',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781982185824.jpg',
    book_uri: 'nyt://book/dade20d6-b303-510c-9687-48eab9308755',
    contributor: 'by Jennette McCurdy',
    description:
      'The actress and filmmaker describes her eating disorders and difficult relationship with her mother. Read by the author. 6 hours, 25 minutes unabridged.',
    publisher: 'Simon & Schuster Audio',
    title: "I'M GLAD MY MOM DIED",
  },
];
const shopArr = lsAdd(LS_KEY, elements);
// localStorage.setItem(LS_KEY, JSON.stringify(elements));
// const shopArr = JSON.parse(localStorage.getItem(LS_KEY));

list.innerHTML = createMarkup(shopArr);

const test = document.querySelectorAll('.js-test');

if (test) {
  for (let i = 0; i < test.length; i += 1) {
    test[i].addEventListener('click', handlerClick);
  }
}

const pagination = document.querySelector('.pagination');
pagination.classList.add('hidden-pagination');

const prev = document.querySelector('.prev');

const next = document.querySelector('.next');

const doublePrev = document.querySelector('.double-prev');

const doubleNext = document.querySelector('.double-next');

const buttonsNumbers = document.querySelector('.buttons-numbers');

const perPage = 4;
let currentPage = 1;

function createMarkup(arr, page, perPage) {
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
                        <use href="./img/global/icons.svg#trash"></use>
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

  if (arr.length <= perPage) {
    pagination.classList.add("hidden-pagination");
  } else {
    pagination.classList.remove("hidden-pagination");
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
    } else {
      button.classList.remove('bth-active');
    }
  });
}

function updateButtonsVisibility() {
  const allButtons = document.querySelectorAll('.bth-num');

  allButtons.forEach((button, index) => {
    if (index + 1 === currentPage || index + 2 === currentPage || index === currentPage) {
      button.classList.remove("hidden-pagination");
    } else {
      button.classList.add("hidden-pagination");
    }
  });
};

renderPage(elements, currentPage, perPage);
renderButtonsPagination(elements);

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderPage(elements, currentPage, perPage);
    updateButtonsVisibility();
    updateActiveClass();
  } else {
    prev.disabled = true;
    doublePrev.disabled = true;
  }

  next.disabled = false;
  doubleNext.disabled = false;
});

next.addEventListener("click", () => {
  const totalPages = Math.ceil(elements.length / perPage);
  if (currentPage < totalPages) {
    currentPage += 1;
    renderPage(elements, currentPage, perPage);
    updateButtonsVisibility();
    updateActiveClass();
  } else {
    next.disabled = true;
    doubleNext.disabled = true;
  }

  prev.disabled = false;
  doublePrev.disabled = false;
});

doublePrev.addEventListener('click', () => {
  currentPage = 1;
  renderPage(elements, currentPage, perPage);
  updateButtonsVisibility();
  updateActiveClass();

  prev.disabled = true;
  next.disabled = false;

  doublePrev.disabled = true;
  doubleNext.disabled = false;
});

doubleNext.addEventListener('click', () => {
  const totalPages = Math.ceil(elements.length / perPage);
  currentPage = totalPages;
  renderPage(elements, currentPage, perPage);
  updateButtonsVisibility();
  updateActiveClass();

  next.disabled = true;
  doubleNext.disabled = true;

  prev.disabled = false;
  doublePrev.disabled = false;
});

function handlerClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  const currentProduct = e.currentTarget.closest('.js-trash');
  const idBook = currentProduct.dataset.id;

  const confirmProduct = confirm(`Remove book?`);

  if (confirmProduct) {
    const product = shopArr.findIndex(({ _id: id }) => id === idBook);
    shopArr.splice(product, 1);

    localStorage.setItem(LS_KEY, JSON.stringify(shopArr));

    list.innerHTML = createMarkup(shopArr);

    // list.insertAdjacentHTML('afterbegin', createMarkup(shopArr));
  }
}
function lsAdd(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
  return JSON.parse(localStorage.getItem(LS_KEY));
}

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
    }
  }
}
