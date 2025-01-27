const button=document.getElementById("button")
const toasts=document.getElementById("toasts")

const msg=[
    "error ocuur",
    "usb error",
    "something went wrong"
]

button.addEventListener("click",()=>createNotification())

function createNotification(){
   const notif=document.createElement("div")
   notif.classList.add("toast")
   notif.innerText=getRandomMessage()
   toasts.appendChild(notif)
   setTimeout(()=>{
      notif.remove()
   },3000)
} 

function getRandomMessage(){
    return msg[Math.floor(Math.random()*msg.length)]
}