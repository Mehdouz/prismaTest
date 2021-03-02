export default function menuToggle() {
  // Séléction des noeuds DOM
  const body = document.querySelector("body");
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const topBanner = document.querySelector(".topBanner");

  // Fonction callback executée au click du menu
  function toggle() {
    const isBlack = burger.classList.contains("header__burger--black");
    const isOpen = burger.classList.contains("header__burger--open");

    body.classList.toggle("overflow-hidden");
    burger.classList.toggle("header__burger--open");
    menu.classList.toggle("header__menu--open");
    if (isBlack && !isOpen) burger.classList.remove("header__burger--black");
    if (
      isOpen &&
      window.pageYOffset > topBanner.offsetHeight - burger.clientHeight
    )
      burger.classList.add("header__burger--black");
  }

  burger.addEventListener("click", toggle);
}
