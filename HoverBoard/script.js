const container=document.querySelector("#container");
let color_schemes=["red","yellow","green","pink"]
Square=500;

for(let i=0;i<Square;i++){
    const square=document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover",()=>{setColor(square)})
    square.addEventListener("mouseleave",()=>{removeColor(square)})
    container.appendChild(square)

    
}

function setColor(element){
  let color=chooseRandomColor()
  element.style.background=color

}
function removeColor(element){
    color2="#1d1d1d"
    element.style.background=color2


}

function chooseRandomColor(){
    return color_schemes[Math.floor(Math.random()*color_schemes.length)];
}