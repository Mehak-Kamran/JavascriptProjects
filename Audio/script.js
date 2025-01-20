let sounds=["sound1","sound2","sound3","sound4"]

sounds.forEach((sound)=>{
    const btn=document.createElement("button")
    btn.classList.add("btn")
    btn.innerText=sound

    document.getElementById('buttons').appendChild(btn)

    btn.addEventListener("click",()=>{
        stopsong()
        document.getElementById(sound).play()
    })
})

let stopsong=()=>{
    sounds.forEach((sound)=>{
        const song=document.getElementById(sound)
        song.pause()
        song.currentTime=0;

    })
}


// let butts=document.querySelectorAll(".bttn");
// console.log(butts)
// let audio=document.querySelector("#hidden")

// let playaudio=()=>{
//     audio.play()
//     isplay=true

// }

// let pauseaudio=()=>{
//     audio.pause()
//     isplay=false
    

// }

// isplay=false
// butts.forEach((butt)=>{
//     butt.addEventListener("click",()=>{
//         console.log("hello")
    
        
        

//         if(isplay==false){
//             playaudio()
//         }
//         else{
//             pauseaudio()
            
//         }
        
//     })
// })

