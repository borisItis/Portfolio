const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Image switch based on screen size
function handleImageSwitch() {
  const firstDisplayBg = document.querySelector(".first-display__bg");
  const firstDisplayBgMobile = document.querySelector(
    ".first-display__bg-mobile"
  );

  if (window.innerWidth <= 768) {
    firstDisplayBg.style.display = "none";
    firstDisplayBgMobile.style.display = "block";
  } else {
    firstDisplayBg.style.display = "block";
    firstDisplayBgMobile.style.display = "none";
  }
}

// Run on load and resize
window.addEventListener("load", handleImageSwitch);
window.addEventListener("resize", handleImageSwitch);
