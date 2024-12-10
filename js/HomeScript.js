document.addEventListener("DOMContentLoaded", () => {
  const images = document.getElementsByClassName("image-slides");
  const screenWidth = window.innerWidth;
  let translateXValue = 0;
  let decrementValue = 20;
  let maxValue = -100;

  if (screenWidth <= 640) {
    decrementValue = 80;
    maxValue = -400;
  }

  function showSlides() {
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `translateX(${translateXValue}vw)`;
    }
    translateXValue -= decrementValue;
    if (translateXValue <= maxValue) translateXValue = 0;
    setTimeout(showSlides, 5000);
  }

  showSlides();
});

function handleHamburger() {
  var navmenu = document.getElementById("navmenu");

  if (navmenu.style.display === "none") {
    navmenu.style.display = "flex";
  } else {
    navmenu.style.display = "none";
  }
}
