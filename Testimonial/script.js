const testimonialsContainer=document.querySelector(".testimonial-container")
const testimonial=document.querySelector(".testimonial")
const userImage=document.querySelector(".user-image")
const userName=document.querySelector(".username")
const role=document.querySelector(".role")

const testimonials=[
    {
        name:"Mak",
        position:"Digital Packaging",
        photo:"https://media.istockphoto.com/id/1328708916/photo/the-boat-sails-on-lake-balkhash-at-sunset.jpg?s=1024x1024&w=is&k=20&c=qRiUPaci-wU4tdLr0fMnAo0Q31ped2pv8E70vx6qp5A=",
        text:"Its  the best"
    },
    {
        name:"kake",
        position:"Freelancer",
        photo:"https://plus.unsplash.com/premium_photo-1685291260924-5b1e48587e9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Worth Buying"
    }
]


let idx = 1
function updateTestimonial(){
    
   const {name,position,photo,text}= testimonials[idx]
   testimonial.innerHTML=text
   userImage.src=photo
   userName.innerHTML=name
   role.innerHTML=position

   idx++

   if(idx > testimonials.length - 1){
    idx=0
   }
}

setInterval(updateTestimonial,10000)