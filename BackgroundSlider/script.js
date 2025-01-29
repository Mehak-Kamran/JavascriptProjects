
const body=document.body;
const slides=document.querySelectorAll(".slide");
const leftbutton=document.getElementById("left");
const rightbutton=document.getElementById("right");

let activeSlide=0;

rightbutton.addEventListener("click",()=>{
    activeSlide++;
    if(activeSlide>slides.length-1){
        activeSlide=0;

    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage=slides[activeSlide].style.backgroundImage

}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active'); // Add active class to the current slide
}
