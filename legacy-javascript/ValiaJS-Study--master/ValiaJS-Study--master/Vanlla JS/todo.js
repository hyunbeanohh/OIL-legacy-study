const todoForm = document.querySelector(".js-todoForm"),
      todoInput = todoForm.querySelector("input"),
      todoList = document.querySelector(".js-todoList");

const TODOS_LS ='toDos';
let toDos  = [];

      
      function DeletToDo(event){
        const btn = event.target;
        const li = btn.parentNode;
        todoList.removeChild(li);
        const cleanToDos = toDos.filter(function(toDo){ // toDo.id 는 숫자 형식이고 ,li.id는 문자열 형식이기 때문에 변환이  필요하다 .  
          return toDo.id !== parseInt(li.id);
        });
        console.log(cleanToDos);
        toDos = cleanToDos;
        savedToDos();
      }
      function savedToDos(){
        localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
        //자바스크립트 obj를 string으로 변환
      }

      function paintTodo(text){
        const li = document.createElement("li"),
              delBtn= document.createElement("button");
        delBtn.innerText ="❌";
        delBtn.addEventListener("click",DeletToDo)
        const span= document.createElement("span");
        const newID = toDos.length +1;
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id =  newID;
        todoList.appendChild(li);
        const todoObj =  {
          text: text,
          id: newID
        };
        toDos.push(todoObj);
        savedToDos();
    }


      function handleSubmit(event){
        event.preventDefault();
        const currentValue = todoInput.value;
        paintTodo(currentValue);
        todoInput.value = "";
      }

     
      function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
          const parseToDos = JSON.parse(loadedToDos);
          parseToDos.forEach(function(toDo){
            paintTodo(toDo.text);
          }); //각각의 배열 안에서 오브젝트를 실행하는 toDo 변수선언
        }
    }
      function init(){
        loadToDos();
        todoForm.addEventListener("submit",handleSubmit);
      }
      init();

