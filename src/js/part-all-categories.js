import Notiflix from 'notiflix';
import listCategory from './axios'

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
