const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");

const text = "Angular is Better than React";
let index = 0;
let speed = 300 / speedInput.value; 

function typeText() {
    textElement.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0; 
    }

    setTimeout(typeText, speed);
}

// Event listener to update speed dynamically
speedInput.addEventListener("input", () => {
    speed = 300 / speedInput.value;
});

typeText(); // Start typing effect
