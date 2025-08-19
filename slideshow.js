let slideIndex = 0;
const images = [
  "url(images/minieggcopy.jpg)",
  "url(images/crack.jpg)", 
  "url(images/cinnamonroll.jpg)"
];

function showSlides() {
  const slide = document.querySelector(".hero-img");  // Assuming one
  const dots = document.getElementsByClassName("dots");

  // Reset all dots to white
  for (let i = 0; i < dots.length; i++) {
    dots[i].style.color = "white";
  }

  // Update background image
  slide.style.backgroundImage = images[slideIndex];

  // Highlight the current dot
  if (dots[slideIndex]) {
    dots[slideIndex].style.color = "black";
  }

  // Update index
  slideIndex = (slideIndex + 1) % images.length;

  setTimeout(showSlides, 5000);
}

showSlides();