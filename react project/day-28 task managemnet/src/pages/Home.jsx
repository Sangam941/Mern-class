import { useContext } from "react";
import { AuthContexProvider } from "../context/AuthContext";
import { TaskContextProvider } from "../context/TaskContext";

const Home = () => {
  const { auth } = useContext(AuthContexProvider);
  const { allTask } = useContext(TaskContextProvider);
  console.log(auth);
  return (
    <div className="flex items-center gap-3 p-4">
      {allTask.map((item, index) => {
        return (
          <article key={index} className="w-64 max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-zinc-600 text-white shadow-lg flex flex-col items-center justify-center p-4 gap-6">
            <h2 className="text-md font-semibold leading-7 line-clamp-1">
              {item.title}
            </h2>
            <p className="text-sm leading-7 line-clamp-2">{item.desc}</p>

            <button className="px-3 py-2 bg-blue-500 rounded-md cursor-pointer">
              View More
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Home;
