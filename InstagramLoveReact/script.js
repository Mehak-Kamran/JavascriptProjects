const loveme = document.querySelector(".loveme");
const times = document.querySelector("#times");

let likeCount = 0;

loveme.addEventListener("dblclick", (e) => {
    likeCount++;
    times.innerText = likeCount;

    const heart = document.createElement("i");
    heart.classList.add("fas", "fa-heart");

    //whereever user click 
    const x = e.clientX - loveme.getBoundingClientRect().left;
    const y = e.clientY - loveme.getBoundingClientRect().top;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    loveme.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1000);
});
