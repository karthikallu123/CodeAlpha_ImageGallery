const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image paths
let currentImageIndex = 0;
const galleryImg = document.getElementById("galleryImg");

function showImage(index) {
  galleryImg.src = images[index];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

// Preload images for smoother navigation (optional)
function preloadImages() {
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.src = images[i];
  }
}
preloadImages();