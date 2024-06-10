let searchbtn = document.querySelector(".search-bar-toggle");
let targetbtn = document.querySelector(".search-bar");
let btn = document.querySelector(".toggle-sidebar-btn");
let sidebare = document.querySelector("body");
let ul = document.querySelector(".nav-content");
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
searchbtn.addEventListener("click", () => {
  targetbtn.classList.toggle("search-bar-show");
});

btn.addEventListener("click", () => {
  sidebare.classList.toggle("toggle-sidebar");
});

ul.addEventListener("click", (e) => {
  e.target.classList.toggle("activee");
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
mybutton.addEventListener("click", backToTop);
