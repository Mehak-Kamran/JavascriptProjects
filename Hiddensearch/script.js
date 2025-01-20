let searchcontainer=document.querySelector(".searchcontainer")
let btn=document.querySelector(".btn")
let input=document.querySelector(".input")

btn.addEventListener("click",()=>{

    //here we can use add(active)but it only add class so we use toggle 
    //inorder to add and then remove active class
   searchcontainer.classList.toggle("active")
})
