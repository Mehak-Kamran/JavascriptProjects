const boxes=document.querySelectorAll(".box")

window.addEventListener("scroll",()=>{
   const truiggerbottom= window.innerHeight/5 * 4
   boxes.forEach(box=>{
    const boxTop=box.getBoundingClientRect().top

    if(boxTop < truiggerbottom){
           box.classList.add("show")
    }else{
        box.classList.remove("show")
    }
   })
})