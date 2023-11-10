const themeSwitch = document.getElementById('themeSwitch');
const header = document.querySelector('.header');
const shoppingListLink = document.querySelector('.a-shoppinglist');
const mainContent = document.querySelector('.main-content-page');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', themeSwitch.checked);
  header.classList.toggle('header-dark-mode', themeSwitch.checked);
  shoppingListLink.classList.toggle(
    'dark-mode-header-link',
    themeSwitch.checked
  );
  mainContent.classList.toggle('dark-mode-main-content', themeSwitch.checked);
});
