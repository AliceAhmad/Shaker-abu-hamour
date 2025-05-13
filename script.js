const images = [
  "img/photo1.jpg",
  "img/photo2.jpg",
  "img/photo3.jpg"
];

let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  document.getElementById("lightboxImage").src = images[index];
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById("lightboxImage").src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById("lightboxImage").src = images[currentImageIndex];
}
