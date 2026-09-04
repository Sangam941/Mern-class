
import { MoveRight } from 'lucide-react';

const card = ({title, desc, tags, buttonColor, mainColor}) => {
  return (
    <div className='bg-gray-200 w-66 h-72 rounded-md text-black p-1'>
      <div className={`main ${mainColor} h-[85%] px-4 py-3 rounded-md flex flex-col gap-1`}>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p className='leading-5 text-sm'>{desc}</p>
        <div className="btn-group mt-5 flex flex-wrap gap-2">
            {
              tags.map((elem)=>{
                return (
                  <button className={`text-sm rounded-full ${buttonColor} px-2 py-1`}>{elem}</button>
                )
              })
            }
        </div>
      </div>

      <div className="footer font-bold flex justify-between items-center px-4 py-2">
        <div>Explore</div>
        <MoveRight />
      </div>
    </div>
  )
}

export default card
