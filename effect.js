const bgImageE1 = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageE1.style.opacity = 1 - window.scrollY / 1100;
 bgImageE1.style.backgroundSize = 200 - window.scrollY / 12 + "%";
}