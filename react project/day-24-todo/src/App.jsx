// const App = () => {

import { useEffect, useState } from "react";

//   // let a = [1,2,3,4,5]
//   let b = [
//     {
//       "name":'ram',
//       "age":23
//     },
//     {
//       "name":'hari',
//       "age":23
//     }
//   ]

//   // a = [...a,6,7,8] //spread operator is also used to add or append values

//   b = [...b, {"name":"krish","age":400}] // create operation

//   console.log(b)

//   let c = {"name":"Apple","age":40}

//   c = {...c, "name":"Mango"}  //update

//   console.log(c)

//   return (
//     <div className="h-screen bg-black text-white">
//       hello
//     </div>
//   )
// }

// export default App

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [editId, setEditId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);

    // check / validation for the empty input
    // code

    // [{},{}]->map->item={id,title,isCompleted}-> {...item, title:title}
    if (isEdit) {
      setTodos(
        todos.map((item) => {
          return item.id === editId ? { ...item, title: title } : item;
        }),
      );

      setTitle("");
      setIsEdit(false);

      // setIsEdit(false)
    } else {
      const newTodo = {
        id: Date.now(), //unique id provide
        title: title,
        isCompleted: false
      };

      // [], [{},{},{}]  {}->new obj
      setTodos([...todos, newTodo]);
      setTitle("");
    }
  };

  // delete todos

  const handleDelete = (id) => {
    let saveTodo
    if (confirm("Are you sure want to delete this todo?")) {
      saveTodo = todos.filter((item) => {
        return item.id != id;
      });
    }

    // [{},{},{}]

    setTodos(saveTodo);
  };


  // todo = {id, title, isCompleted} -> click gareko wala ko data
  // edit todos
  const handleEdit = (todo) => {
    setEditId(todo.id);
    setTitle(todo.title);
    setIsEdit(true);
  };

  // handle toggle
  const handleToggle = (id)=>{
    console.log(id)
      const updateToggle = todos.map((item)=>{
        // {}
        return item.id == id? {...item, isCompleted: !item.isCompleted}:item
      })

      setTodos(updateToggle)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-5">
      <div className="main">
        <h1>Todo List Application:</h1>

        <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-700 outline-zinc-700 px-4 py-2 rounded-md"
            type="text"
            placeholder="Enter your title"
          />

          <input
            className="bg-green-700 cursor-pointer outline-zinc-700 px-4 py-2 rounded-md"
            type="submit"
            value={`${isEdit ? "Edit Todo" : "Add New Todo"}`}
          />
        </form>

        <div className="todos-list bg-green-400/20 mt-4 rounded-md p-2">
          <ul>
            {todos.map((item, index) => {
              return (
                <li
                  className="bg-sky-300 text-black mb-2 rounded-md p-4 flex items-center justify-between"
                  key={index}
                >
                  <span
                  onClick={()=>handleToggle(item.id)}
                  className={`cursor-pointer ${item.isCompleted? "line-through":""}`}>{item.title}</span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-gray-500 text-sm font-semibold cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 text-sm font-semibold cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
