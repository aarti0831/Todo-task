const todoForm = document.getElementById('todoform')

const todosContainer = document.getElementById('todoContainer')
const todosItemControl = document.getElementById('todoItemControl')
let todosArr=[
    {
        todoItem : "JS"
    },
    {
        todoItem:"Ts"
    }

];

function createList(arr){
    let result = '';
    arr.forEach(ele=>{
        result += `<li class="list-group-item d-flex justify-content-between">
        <strong>${ele.todoItem}</strong>
                     <div>
                            <button class="btn btn-sm btn-outline-info">Edit</button>
                            <button class="btn btn-sm btn-outline-danger">Remove</button>
                        
                        </div>
                 </li>`
    });

    todosContainer.innerHTML = result
}
createList(todosArr)