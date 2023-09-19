const burgerMenu = document.querySelector('.js-header-menu')
const closeBurgerMenu = document.querySelector('.js-close-menu')

burgerMenu.addEventListener('click', handlerClick);

function handlerClick(evn) {
  const currentDish = evn.target.closest('.js-open-dish').dataset.id;
  console.log(currentDish);
  return currentDish;
}
