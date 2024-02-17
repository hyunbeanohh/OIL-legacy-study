const body = document.querySelector("body");
const IMG_Number = 5;


function paintImages(imgnumber){
    const image = new Image();
    image.src =`./images/${imgnumber+1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);
}

function genRanNumber (){
    const number = Math.floor(Math.random()*IMG_Number);
    return number;
}

function init(){
 const randomNumber = genRanNumber();
 paintImages(randomNumber);
}
init();