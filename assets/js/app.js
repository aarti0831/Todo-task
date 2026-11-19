
const todoForm = document.getElementById('todoform');

const todosContainer = document.getElementById('todoContainer');

const todosItemControl = document.getElementById('todoItemControl');

let todosArr = [
    {
        todoItem: "JS"
    },
    {
        todoItem: "TS"
    },
    {
        todoItem: "CSS"
    },
    {
        todoItem: "HTML"
    }

];

function createList(arr) {

    let result = '';

    arr.forEach((ele) => {

        result += `
        <li class="list-group-item d-flex justify-content-between align-items-center todo-item">

            <strong>${ele.todoItem}</strong>

            <div>
                <button class="btn btn-lg btn-outline-info">Edit</button>

                <button class="btn btn-lg btn-outline-danger">Remove</button>
            </div>

        </li>`;
    });

    todosContainer.innerHTML = result;
}

createList(todosArr);

function onTodoAdd(eve) {

    eve.preventDefault();

    let todoObj = {
        todoItem: todosItemControl.value
    };

    todosArr.push(todoObj);

    createList(todosArr);

    todoForm.reset();

    console.log(todosArr);
}

todoForm.addEventListener('submit', onTodoAdd);
