import { useContext } from "react";
// import { AuthContexProvider } from "../context/AuthContext";
import { TaskContextProvider } from "../context/TaskContext";
import { useLocation, useNavigate } from "react-router-dom";
import { PencilOff, Trash } from 'lucide-react';

const Home = () => {
  // const { auth } = useContext(AuthContexProvider);
  const { allTask , deleteItem} = useContext(TaskContextProvider);
  console.log(allTask);

  const navigate = useNavigate();


  const handleDelete = (id)=>{
    if(window.confirm("Are you sure want to delete this item")){
      deleteItem(id)
    }
  }


  const handleEdit = (item)=>{
    navigate(`/edit-task/${item.id}`, {state:item})


    
  }
  return (
    <div className="flex items-center gap-3 p-4">
      {allTask?.map((item, index) => {
        return (
          <article
            key={index}
            className="w-64 max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-zinc-600 text-white shadow-lg flex flex-col items-center justify-center p-4 gap-6"
          >
            <h2 className="text-xl font-semibold leading-7 line-clamp-1">
              {item.title}
            </h2>
            <p className="text-sm leading-7 line-clamp-2">{item.desc}</p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => navigate(`/${item.id}`)}
                className="px-3 py-2 bg-blue-500 rounded-md cursor-pointer"
              >
                View More
              </button>

              <button
              onClick={()=>handleEdit(item)} className="edit cursor-pointer">
                <PencilOff />
              </button>

              <button 
              onClick={()=>handleDelete(item.id)}
              className="del cursor-pointer ">
                <Trash color="red"/>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Home;
