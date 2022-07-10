const hamburger = document.querySelector(".hamburger");
const menuAside = document.querySelector(".menu-aside");
const btnClose = document.querySelector(".close-menu");
hamburger.addEventListener("click", () => {
  menuAside.classList.add(".show-menu");
  menuAside.style.right = "0";
  hamburger.style.opacity = "0";
});
btnClose.addEventListener("click", () => {
  menuAside.style.right = "calc(-45vw - 2em)";
  hamburger.style.opacity = "1";
});
