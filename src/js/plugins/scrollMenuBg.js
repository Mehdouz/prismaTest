export default function scrollMenuBg() {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
      document.querySelector(".header").style.background = "rgb(0,0,0,0.7)";
    } else {
      document.querySelector(".header").style.background = "transparent";
    }
  });
}
