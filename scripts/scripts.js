const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");
const sideNav = document.querySelector(".side_nav");

openBtn.addEventListener("click", () => {
  sideNav.style.left = "0px";
});

closeBtn.addEventListener("click", () => {
  sideNav.style.left = "-350px";
});
