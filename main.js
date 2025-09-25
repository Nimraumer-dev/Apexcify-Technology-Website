let slideIndex = 1;
let images = [
  "/img/Automation3.jpg",
  "/img/cloud .jpg",
  "/img/Ai.jpg",
  "/img/Cyber.jpg"
];

// Lightbox Open
function openLightbox(n) {
  document.getElementById("lightbox").style.display = "flex";
  showSlide(slideIndex = n);
}

// Lightbox Close
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Slide Change
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Show Current Slide
function showSlide(n) {
  if (n > images.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = images.length; }
  document.getElementById("lightbox-img").src = images[slideIndex - 1];
}




const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger i");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");

  // icon toggle
  if (hamburgerIcon.classList.contains("fa-bars")) {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
  }
}




function smoothScroll(target, duration) {
  let targetElement = document.querySelector(target);
  let targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 60;
  let startPosition = window.pageYOffset;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;

    // 👇 Linear scroll
    let ease = linear(timeElapsed, startPosition, targetPosition - startPosition, duration);
    window.scrollTo(0, ease);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function linear(t, b, c, d) {
    return c * (t / d) + b;
  }

  requestAnimationFrame(animation);
}