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

//navbar background-color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  const scrollUpBtn = document.querySelector(".scrollup-btn");
  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollup-btn-active");
  } else {
    scrollUpBtn.classList.remove("scrollup-btn-active");
  }

  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;

    let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");
    } else {
      navId.classList.remove("active-navlink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    });
  });
});

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
