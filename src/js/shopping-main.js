const empty = document.querySelector('.shopping-list-empty');
console.log('object');
const LS_KEY = 'shopping-list';
const elements = ['1', '2'];

localStorage.setItem(key, JSON.stringify(elements));

try {
  const shopArr = JSON.parse(localStorage.getItem(key));
  console.log(shopArr);
} catch {
  empty.classList.remove('hidden');
}
