
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
