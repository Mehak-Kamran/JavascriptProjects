let background=document.querySelector(".container")
let loading=document.querySelector(".loading")

let load=0;

let blurr=()=>{
    load++
    if(load>99){
        clearInterval(int)
    }
    loading.innerText=load+"%"
    loading.style.opacity=scale(load,0,100,1,0)
    background.style.filter=`blur(${scale(load,0,100,30,0)}px)`

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let int=setInterval(blurr,30);





