const tagEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// Automatically focus on the textarea
textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    // Trigger random selection when Enter is pressed
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""; // Clear the textarea
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "") // Remove empty strings
        .map((tag) => tag.trim()); // Trim whitespace

    // Clear existing tags
    tagEl.innerHTML = "";

    // Create and append each tag
    tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagEl.appendChild(tagElement);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag) {
            randomTag.classList.add("highlight");

            setTimeout(() => {
                randomTag.classList.remove("highlight");
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            if (randomTag) {
                randomTag.classList.add("highlight");
            }
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}
