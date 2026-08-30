console.log("todo")

let form = document.querySelector("#todoForm")
let input = document.querySelector("#todoInput")
let todoList = document.querySelector("#todoList")
let todos = JSON.parse(localStorage.getItem("todos")) || []

renderTodos()

form.addEventListener("click", (e)=>{
    e.preventDefault()
    renderTodos()

    if(input.value.trim() === ""){
        return;
    }

    let newTodo = {
        id: Date.now(),
        title: input.value,
        complete: false
    }

    // insert the new todo in local storage
    todos = [
        ...todos,
        newTodo
    ]

    localStorage.setItem("todos", JSON.stringify(todos))

    renderTodos()
    
    input.value = ""
})

function renderTodos(){
    todoList.innerHTML = ""

    todos.forEach(todo => {
        
        let li = document.createElement("li")
    
        li.innerHTML = `
            <span class= "todo-text ${todo?.complete?"completed":""}"
            onclick = "toggleTodos(${todo?.id})"
            >
                ${todo?.title}
            </span>
    
            <button onclick = "deleteTodos(${todo?.id})">
                Delete
            </button>
    
        `
        todoList.append(li)
    });

}


// delete todos function
function deleteTodos(id){

    todos = todos.filter((todo)=>{
        // console.log(todo.id)
        return todo?.id!==id
    })
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTodos()
}
// [not matches todos, matching todo aaudina]

// {
//     id:
//     title:
//     complete:
// }
// toggle todos
// function toggleTodos(id){
//     todos = todos.map((todo)=>{
//         if(todo?.id === id){
//             // console.log(todo?.id, id)
//             return {
//                 ...todo,complete:!todo.complete
//             }
//         }
//     })
// localStorage.setItem("todos", JSON.stringify(todos))
//     renderTodos()

// }