const fill=document.querySelector(".fill");
const empties=document.querySelectorAll(".empty")

fill.addEventListener("dragstart",dragStart)
fill.addEventListener("dragend",DragEnd)

for(const empty of empties){
    empty.addEventListener("dragover",DragOver)
    empty.addEventListener("dragENTER",DragEnter)
    empty.addEventListener("drop",dragDrop)
}

function dragStart(){
    // this.className += 'hold'
    // setTimeout(()=>this.className="invisible",0)
}

function DragEnd(){
    console.log("Drag End")
}

function DragLeave(){
    console.log("Drag Leave")
}

function DragEnter(e){
    e.preventDefault()
}

function DragOver(e){
    e.preventDefault()
}

function dragDrop(){
    this.className="empty"
    this.append(fill)
}