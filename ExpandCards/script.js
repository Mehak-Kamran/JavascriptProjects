const frames=document.querySelectorAll(".panel")

frames.forEach((frame)=>{
    frame.addEventListener("click",()=>{
        removeactiveclass();
        frame.classList.add('active');
    })
})

removeactiveclass=()=>{
    frames.forEach((frame)=>{
        frame.classList.remove('active');
        
})



}
