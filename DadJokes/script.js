
let button=document.querySelector(".bttn")
let jokepara=document.querySelector("#jokepara")
console.log(jokepara)
button.addEventListener("click",()=>{
    get_joke()
})


async function get_joke(){
let data= await fetch("https://official-joke-api.appspot.com/random_joke") 
let joke= await data.json()
let jokes=joke.setup+joke.punchline
console.log(jokes)
jokepara.innerHTML=jokes;
}

