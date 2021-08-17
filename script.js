const ham = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar-nav");

ham.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    navbar.classList.remove("open");
  } else {
    sidebar.classList.add("open");
    navbar.classList.add("open");
  }
});
