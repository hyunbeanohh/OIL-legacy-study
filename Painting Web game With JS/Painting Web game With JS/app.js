const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("JsColors");
const range = document.getElementById("JsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 600;
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = "#INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.fillStyle = "white";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.lineWidth = "2.5";

let painting = false;
let filling  = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorclick(event){
    const bgcolor = event.target.style.backgroundColor;
    ctx.strokeStyle = bgcolor;
    ctx.fillStyle = bgcolor;
    
}
function handlerangeChange(event){
    const strokesize = event.target.value;
    ctx.lineWidth = strokesize;

}
function handlemodeClick(event){
    if(filling  ===  true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Brush";
    }
}
function handlecanvasClick(){
    if(filling)
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
}
function handleCM(event){
    event.preventDefault();
}
function handlesaveClick(){
    const image = canvas.toDataURL(); // default png
    const link = document.createElement("a");
    link.href = image;
    link.download = "paingJS";
    link.click();
}
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handlecanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color =>color.addEventListener("click",handleColorclick));

if(range){
    range.addEventListener("input",handlerangeChange);
}

if(mode){
    mode.addEventListener("click",handlemodeClick);
}
if(saveBtn){
    saveBtn.addEventListener("click",handlesaveClick);
}