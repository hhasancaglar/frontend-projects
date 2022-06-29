const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  searchToggle = document.querySelector(".search-toggle"),
  sidebarClose = document.querySelector(".sidebar-close"),
  sidebarOpen = document.querySelector(".sidebar-open");

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebar-open") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});
