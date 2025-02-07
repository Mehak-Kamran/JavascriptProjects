const bttn=document.querySelector(".bttn")
const text=document.querySelector(".text")
let choice=["juice","apple","sqa","we","hi","web","sqa","banan","web","angular"]

bttn.addEventListener("click",()=>{
   let rndom=choice[Math.floor(Math.random()*choice.length)]
   text.innerText=rndom

})