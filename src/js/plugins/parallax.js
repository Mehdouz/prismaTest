export default function parallax({
  container,
  image,
  backgroundSpeed,
  imageSpeed,
}) {
  // Séléction des noeuds DOM
  const containerParallax = document.querySelectorAll(container);

  // Déclaration variable hauteur de la section
  let heightSection = 0;

  // Itération sur les noeuds trouvés
  Array.from(containerParallax).forEach((element) => {
    const bg = element.querySelector(`${container}__bg`);
    const img = element.querySelector(image);

    // Fonction Parallax
    const handleScroll = () => {
      //  Vitesse du scroll
      let imgTranslate = (window.pageYOffset - bg.offsetTop) * imageSpeed;
      let bgTranslate = (window.pageYOffset - bg.offsetTop) * backgroundSpeed;

      // Déplacement de l'image
      bg.style.transform = `translate3d(0px,${bgTranslate}px,0px)`;
      if (img) {
        img.style.transform = `translate3d(0px,${imgTranslate}px,0px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Calcul la hauteur du bloc parallax en fonction de la vitesse du parallax & et de la largeur du viewport
    const handleResize = () => {
      heightSection = bg.clientHeight - backgroundSpeed * 800;
      element.style.height = `${heightSection}px`;
    };

    // Définit la hauteur du container en fonction de l'image de fond au chargement
    bg.addEventListener("load", handleResize);

    window.addEventListener("resize", handleResize);

    // TODO : remove when leaving the view/page (SPA)
    //   window.removeEventListener("scroll", handleScroll);
    //   window.removeEventListener("resize", handleScroll);
  });
}
