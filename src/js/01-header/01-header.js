
// const burgerMenubtn = document.querySelector('.js-header-menu')
// const closeBurgerMenuBtn = document.querySelector('.js-close-menu')
// let burgerMenu = document.querySelector('.js-burger-menu')

// burgerMenuBtn.addEventListener('click', handlerClick);

// burgerMenubtn.addEventListener('click', handlerClick)

// function handlerClick(){
//   burgerMenu.classList.toggle('burger-menu');
  
//   burgerMenu.toggleClass('active');
    
    
//   }
  const elements = {
    openBurgerBtn: document.querySelector('#data-burger-menu-opener'),
    closeBurgerBtn: document.querySelector('#data-mobile-menu-closed'),
    menu: document.querySelector('#data-burger-menu'),
  };

  elements.openBurgerBtn.addEventListener("click", toggleMenu);
  elements.closeBurgerBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    elements.menu.classList.toggle("is-hidden");
  }
