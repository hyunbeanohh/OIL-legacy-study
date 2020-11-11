const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      gretting = document.querySelector(".js-grettings");
const User_LS = "currentUser";
const SHOWING_CN = "showing";

      function savedName(text){
          localStorage.setItem(User_LS,text);
      }

      function handleSubmit(event){
        event.preventDefault();
        const currentValue = input.value;
        paintinggretting(currentValue);
        savedName(currentValue);
      }

      function askForName(){
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit",handleSubmit);
      }

      function paintinggretting(text){
        form.classList.remove(SHOWING_CN);
        gretting.classList.add(SHOWING_CN);
        gretting.innerText = `Hello ${text}`;
      }

      function localhost(){
        const currentUser = localStorage.getItem(User_LS);
        if(currentUser === null){
            askForName();
        }
        else{
            paintinggretting(currentUser);
        }
      }
      function init(){
        localhost();
      }
      init();
     
      