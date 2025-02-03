document.querySelector(".ripple-button").addEventListener("click", function (event) {
    const button = this;
    const ripple = document.createElement("span");

    
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ripple.classList.add("ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
