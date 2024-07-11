const openBtn = document.querySelector(".open_btn");
const closeBtn = document.querySelector(".close_btn");
const sideNav = document.querySelector(".side_nav");
const menuItem = document.querySelectorAll(".nav_option");
// const submenuItem = document.querySelectorAll(".submenu_option");
// const submenuContainer = document.querySelector(".submenu_container");

openBtn.addEventListener("click", () => {
  sideNav.style.left = "0px";
});

closeBtn.addEventListener("click", () => {
  sideNav.style.left = "-350px";
});

for (let item of menuItem) {
  item.addEventListener("click", (event) => {
    const wrapper = event.target.parentElement;
    wrapper.children[1].classList.toggle("hidden");
  });
}
