window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
