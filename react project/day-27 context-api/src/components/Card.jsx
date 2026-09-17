

const Card = ({title, body, id}) => {
    // console.log("props",title, body)

  
  return (
    <article className="w-64 max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-zinc-600 text-white shadow-lg flex flex-col items-center justify-center p-4 gap-6">
      <h2 className="text-md font-semibold leading-7 line-clamp-1">
        {title}
      </h2>
      <p className="text-sm leading-7 line-clamp-2">
        {body}
      </p>

      <button 
      className="px-3 py-2 bg-blue-500 rounded-md cursor-pointer">View More</button>
    </article>
  );
};

export default Card;
