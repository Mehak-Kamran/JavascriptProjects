document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".kinetic");

    // Example: Stop the loader after 5 seconds
    setTimeout(() => {
        loader.style.display = "none";
    }, 5000);
});
