// grabbing elements from home page
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const link = document.querySelector(".links a");

//when hamburger is clicked activate mobileMenu function
hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("click", mobileMenu);

//this function makes menu active
function mobileMenu() {
  // turns hamburger into X
  hamburger.classList.toggle("active");
  // opens up navigation links
  navMenu.classList.toggle("active");
}
