// Navbar Open-Close
const body = document.querySelector("body");
const navMenu = document.querySelector(".menu-content");
const navOpenBtn = document.querySelector(".navopen-btn");
const navCloseBtn = document.querySelector(".navclose-btn");

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  });
}

if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  });
}

// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  //spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
