import ready from "./utils/ready";
import parallax from "./plugins/parallax";
import adScroll from "./plugins/adScroll";
import menuToggle from "./plugins/menuToggle";
import scrollMenuBg from "./plugins/scrollMenuBg";
import menuChangeColor from "./plugins/menuChangeColor";

import "../css/main.scss";

// Charge le javascript quand le document est chargé
ready(() => {
  /**
   * Execute seulement sur desktop
   */
  if (window.innerWidth >= 1024) {
    // Parallax
    parallax({
      container: ".topBanner",
      image: ".topBanner__logoContainer__logo",
      backgroundSpeed: 0.2,
      imageSpeed: -0.5,
    });
    parallax({
      container: ".bgSection",
      backgroundSpeed: 0.2,
    });

    // Sticky Advertising
    adScroll();

    // Menu bg au scroll
    scrollMenuBg();
  }

  /**
   * Execute seulement sur mobile
   */

  if (window.innerWidth < 1024) {
    // Ouvre et ferme le menu
    menuToggle();

    // Change la couleur du menu en fonction du scroll
    menuChangeColor();
  }
});
