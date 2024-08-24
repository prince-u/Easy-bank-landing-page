//This is for handling the dropdown menu

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

darkOverlay.addEventListener("click", () => {
  dropDownMenu.classList.remove("active");
  fourPhonesImg.classList.remove("active");
  darkOverlay.classList.remove("active");
  html.classList.remove("active");
  hamburgerIcon.innerHTML = `<img src="images/icon-hamburger.svg" alt="">`;
});

//This is for the intersection observer

const main2 = document.querySelector(".container2>main");
const main3 = document.querySelector(".container3>main");
const benefitsImage = document.querySelectorAll(".container3 .benefits-image");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: "0.5" }
);

observer.observe(main2);
observer.observe(main3);
benefitsImage.forEach((el) => {
  observer.observe(el);
});
