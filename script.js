//  SELECTORES
const todoinput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

//EVENT LISTENERS
todoButton.addEventListener('click', addtodo );
todolist.addEventListener('click', deletecheck);

//FUNCTIONS
function addtodo(event){
    event.preventDefault();
    console.log('hello');

    const todoDIV = document.createElement('div');
    todoDIV.classList.add("todo");

    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    todoDIV.appendChild(newtodo);
    
    // checkmark button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDIV.appendChild(completedbutton);
    //TRASH BUTTON
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDIV.appendChild(trashBtn);

    //APPend two list
    todolist.appendChild(todoDIV);

    // clear input
    todoinput.value = "";

}
function deletecheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
        // todo.remove();
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
