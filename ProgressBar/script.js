const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const circles=document.querySelectorAll(".circle");
const progress=document.querySelector(".progress");
console.log(next)
console.log(prev)

let activecurrent=1;

next.addEventListener("click",()=>{
      activecurrent+=1;
      if(activecurrent>circles.length){
        activecurrent=circles.length
        console.log(activecurrent)
      }
      update()
})

prev.addEventListener("click",()=>{
    activecurrent-=1;
    if(activecurrent<1){
      activecurrent=1
      console.log(activecurrent)
    }
    update()
    
})

function update(){
     circles.forEach((circle,index)=>{
        if(index<activecurrent){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
     })
      const actives=document.querySelectorAll(".active")
        progress.style.width=(actives.length/circles.length)*100 + '%'
        if(activecurrent===1){
          prev.disabled=true;
        }else if(activecurrent===circles.length){
          next.disabled=true
        }else{
          prev.disabled=false
          next.disabled=false
        }
}



