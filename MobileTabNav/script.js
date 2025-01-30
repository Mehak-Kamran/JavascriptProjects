const contents=document.querySelectorAll(".content");
const listitems=document.querySelectorAll("nav ul li")

listitems.forEach((item,idx)=>{
         item.addEventListener("click",()=>{
            hideAll()
            contents[idx].classList.add("show")
         })
})

function hideAll(){
    
        contents.forEach((content)=>{
            content.classList.remove("show")
        })
}

