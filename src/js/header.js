// Dark theme

const themeSwitch = document.getElementById('themeSwitch');
const header = document.querySelector('.header');
const shoppingListLink = document.querySelector('.a-shoppinglist');
const shoppingBagDarkMode = document.querySelector('.shopping-bag');
const logoDarkMode = document.querySelector('.header-logo-2');
const burgerDarkMode = document.querySelector('.burger-menu-icon');
const mobileCloseDark = document.querySelector('.mobile-close-icon');
const categoryDarkText = document.querySelector('.categories-list');
// const categoriesChildren = categoryDarkText.children;

function setThemeFromLocalStorage() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  document.body.classList.toggle('dark-mode', isDarkMode);
  header.classList.toggle('header-dark-mode', isDarkMode);
  shoppingListLink.classList.toggle('dark-mode-header-link', isDarkMode);
  shoppingBagDarkMode.classList.toggle('shopping-bag-dark', isDarkMode);
  logoDarkMode.classList.toggle('logo-dark-mode', isDarkMode);
  burgerDarkMode.classList.toggle('burger-menu-icon-dark', isDarkMode);
  mobileCloseDark.classList.toggle('mobile-close-icon-dark', isDarkMode);
  categoryDarkText.classList.toggle('categories-list-dark-mode', isDarkMode);
  // categoriesChildren.classList.toggle('category-dark-hover', isDarkMode);

  themeSwitch.checked = isDarkMode;
}

document.addEventListener('DOMContentLoaded', setThemeFromLocalStorage);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;

  localStorage.setItem('darkMode', isDarkMode);

  document.body.classList.toggle('dark-mode', isDarkMode);
  header.classList.toggle('header-dark-mode', isDarkMode);
  shoppingListLink.classList.toggle('dark-mode-header-link', isDarkMode);
  shoppingBagDarkMode.classList.toggle('shopping-bag-dark', isDarkMode);
  logoDarkMode.classList.toggle('logo-dark-mode', isDarkMode);
  burgerDarkMode.classList.toggle('burger-menu-icon-dark', isDarkMode);
  mobileCloseDark.classList.toggle('mobile-close-icon-dark', isDarkMode);
  categoryDarkText.classList.toggle('categories-list-dark-mode', isDarkMode);
  // categoriesChildren.classList.toggle('category-dark-hover', isDarkMode);
});

// Mobile menu

const openModalBtn = document.querySelector('.open-menu-btn');
const mobileMenu = document.querySelector('.menu-data-modile');
const closeMenuBtn = document.querySelector('.close-menu-btn');

openModalBtn.onclick = function () {
  mobileMenu.style.display = 'block';
  openModalBtn.style.display = 'none';
  closeMenuBtn.style.display = 'block';
  document.body.style.overflow = 'hidden';
};
closeMenuBtn.onclick = function () {
  mobileMenu.style.display = 'none';
  openModalBtn.style.display = 'block';
  closeMenuBtn.style.display = 'none';
  document.body.style.overflow = 'auto';
};

// Button > 768  fix
function checkWidth() {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth >= 768) {
    document.querySelector('.open-menu-btn').style.display = 'none';
  } else {
    document.querySelector('.open-menu-btn').style.display = 'block';
  }
}

window.onload = checkWidth;
window.onresize = checkWidth;

// Header color changer

function updateClassBasedOnPageShopping() {
  const myElement = document.querySelector('.a-shoppinglist');
  const secondElem = document.querySelector('.shopping-mobile');

  if (window.location.href.indexOf('shoppinglist.html') > -1) {
    myElement.classList.add('a-shopping-active');
    secondElem.classList.add('a-shopping-active');
  } else {
    myElement.classList.remove('a-shopping-active');
    secondElem.classList.remove('a-shopping-active');
  }
}

updateClassBasedOnPageShopping();

function updateClassBasedOnPageHome() {
  const myElement = document.querySelector('.a-home');
  const secondElem = document.querySelector('.home-mobile');

  if (window.location.href.indexOf('index.html') > -1) {
    myElement.classList.add('a-home-active');
    secondElem.classList.add('a-home-active');
  } else {
    myElement.classList.remove('a-home-active');
    secondElem.classList.remove('a-home-active');
  }
}

updateClassBasedOnPageHome();
