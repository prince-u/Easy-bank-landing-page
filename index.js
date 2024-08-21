// so what i need to do is to bring in the hamburger icon, add an event listener on the hamburger icon to open the menu

const hamburgerIcon = document.querySelector(".hamburger-icon");
const dropDownMenu = document.querySelector(".nav-links");
const fourPhonesImg = document.querySelector(".four-phones>img");
const darkOverlay = document.querySelector(".dark-overlay");
const html = document.querySelector("html");
hamburgerIcon.addEventListener("click", (e) => {
  if (dropDownMenu.classList.contains("active")) {
    hamburgerIcon.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`;
  } else {
    hamburgerIcon.innerHTML = `<img src="images/icon-close.svg" alt="">`;
  }
  dropDownMenu.classList.toggle("active");
  fourPhonesImg.classList.toggle("active");
  darkOverlay.classList.toggle("active");
  html.classList.toggle("active");
});
