export default function adScroll() {
  // Séléction des noeuds DOM
  const advertisingSection = document.querySelector(".contentSectionAd");
  const advertising = document.querySelector(".contentSectionAd__wrapper__ad");

  //   Récupérer padding section advertising
  const paddingSection = Number(
    window
      .getComputedStyle(advertisingSection)
      .getPropertyValue("padding")
      .match(/\d*/)[0]
  );

  //   Fonction trigger au scroll
  const handleScroll = () => {
    //   Valeur du translateY
    let adTranslate =
      window.pageYOffset - advertising.offsetTop + paddingSection;

    // Déplacement de l'image
    if (
      window.pageYOffset > advertisingSection.offsetTop &&
      window.pageYOffset <
        advertisingSection.offsetTop + advertising.clientHeight - paddingSection
    ) {
      advertising.style.transform = `translate3d(0px,${adTranslate}px,0px)`;
    }
  };
  window.addEventListener("scroll", handleScroll);
}
