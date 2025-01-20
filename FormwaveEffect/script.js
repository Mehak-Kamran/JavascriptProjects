const labels = document.querySelectorAll(".form_control label");
console.log(labels); // NodeList, so we can use forEach

labels.forEach((label) => {
    // Get the inner text of the label, split into individual letters
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => {
            // Wrap each letter in a <span> tag
            return `<span style="transition-delay:${idx*50}ms">${letter}</span>`;
        })
        .join(''); // Join the array back into a string
});
