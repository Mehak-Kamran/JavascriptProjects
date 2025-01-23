const toggles=document.querySelectorAll(".faq-toggle");
const right=document.querySelectorAll(".fa-times");
const faqactive=document.querySelector(".active");
console.log(toggles)
console.log(right)
console.log(faqactive)

toggles.forEach((toggle)=>{
    toggle.addEventListener("click",()=>{
        toggle.parentNode.classList.toggle("active")
    })
})