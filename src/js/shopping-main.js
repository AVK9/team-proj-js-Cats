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

const test = document.querySelector('.js-test');

for (let i = 0; i < test.length; i += 1) {
  test[i].addEventListener('click', handlerClick);
}

function createMarkup(arr) {
  return arr
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
