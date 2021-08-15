const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODO_KEY = "todos"
let toDos = [];

//JSON.stringify()는 array 전체를 하나의 string으로 만듦
//JSON.parse()는 이렇게 만들어진 string을 다시 array로 바꿈
function saveTodos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(Todo){
    const li = document.createElement("li");
    li.id = Todo.id;
    const span = document.createElement("span");      
    span.innerText = Todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);
    li.appendChild(span);
    

    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    const newTodoObj ={
        id: Date.now(),
        text: newTodo,
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
    todoInput.value ="";
}

todoForm.addEventListener("submit", handleTodoSubmit);


const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !== null){
    const parsedTodo = JSON.parse(savedTodos);
    toDos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}

