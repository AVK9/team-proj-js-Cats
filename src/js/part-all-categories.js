import Notiflix from 'notiflix';
import listCategory from './axios'

const catList = document.querySelector('.categoriesList');

try {
const resp = listCategory();

markupCatList(resp)
  }
  catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Error');
  }

function markupCatList(respArr) {
   const categoriesList = respArr.map(({list_name}
   ) => `
       <li class="categoryItem">${list_name}</li>
       `).join("");
    catList.innerHTML = categoriesList;
}
