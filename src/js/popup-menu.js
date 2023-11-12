//html
// попап книги -->
//  <div class="bookInfoBox"></div>
///////////////////////////////////////
const bookPage = document.querySelector('._id');
bookPage.addEventListener('click', creatMarkupBook);
// ---->>>>>>   Детальна інформація про книгу  <<<<<<-----//??????????????????????????????
async function bookDetail(bookId) {
  return await fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then(resp => {
      // console.log([resp]);
      creatMarkupBook([resp]);
    })
    .catch(err => console.log(err));
}

function creatMarkupBook(respArr) {
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
         <button class="btnCloseInfoBook">X</button>
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
         `
    )
    .join('');
  bookPage.classList.remove('hidden');
  bookPage.innerHTML = pageMarkupBook;
  bookPage.insertAdjacentHTML('beforeend', pageMarkupBook);
}
//////////////////////////////////////////////////////////////
