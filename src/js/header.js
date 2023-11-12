const themeSwitch = document.getElementById('themeSwitch');
const header = document.querySelector('.header');
const shoppingListLink = document.querySelector('.a-shoppinglist');
// const sideMenuSwitch = document.querySelector('.allCategoriesBox');
const shoppingBagDarkMode = document.querySelector('.shopping-bag');
const logoDarkMode = document.querySelector('.header-logo-2');
const burgerDarkMode = document.querySelector('.burger-menu-icon');
const mobileCloseDark = document.querySelector('.mobile-close-icon');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', themeSwitch.checked);
  header.classList.toggle('header-dark-mode', themeSwitch.checked);
  shoppingListLink.classList.toggle(
    'dark-mode-header-link',
    themeSwitch.checked
  );
  shoppingBagDarkMode.classList.toggle(
    'shopping-bag-dark',
    themeSwitch.checked
  );
  // sideMenuSwitch.classList.toggle('side-menu-dark-mode', themeSwitch.checked);
  logoDarkMode.classList.toggle('logo-dark-mode', themeSwitch.checked);
  burgerDarkMode.classList.toggle('burger-menu-icon-dark', themeSwitch.checked);
  mobileCloseDark.classList.toggle(
    'mobile-close-icon-dark',
    themeSwitch.checked
  );
});

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
