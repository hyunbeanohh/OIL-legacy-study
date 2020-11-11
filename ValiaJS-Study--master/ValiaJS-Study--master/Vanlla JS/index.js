const title= document.querySelector("#title");

const CLICKED_CLASS= "clicked";

function  handClick(){
  const currentclass =title.className;
  if(currentclass !== CLICKED_CLASS){
    title.className = CLICKED_CLASS;
  }else{
    title.className = "";
  }
}
function init(){
title.addEventListener("click",handClick);
}
init();

