const imageContainer = document.getElementById("imgs");
const images = document.querySelectorAll(".image-container img");
const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");

let index = 0;

function updateCarousel() {
    imageContainer.style.transform = `translateX(${-index * 500}px)`;
}

nextButton.addEventListener("click", () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Reset to first image
    }
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Go to last image
    }
    updateCarousel();
});
