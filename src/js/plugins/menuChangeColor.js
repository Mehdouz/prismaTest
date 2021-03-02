export default function menuChangeColor() {
  // Séléction des noeuds DOM
  const burger = document.querySelector(".header__burger");
  const topBanner = document.querySelector(".topBanner");

  const handleScroll = () => {
    if (window.pageYOffset > topBanner.offsetHeight - burger.clientHeight) {
      burger.classList.add("header__burger--black");
    } else {
      burger.classList.remove("header__burger--black");
    }
  };
  window.addEventListener("scroll", handleScroll);
}
