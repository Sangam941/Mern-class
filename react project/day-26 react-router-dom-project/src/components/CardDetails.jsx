import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardDetails = () => {
  const params = useParams();
  console.log(params.id);

  const navigate = useNavigate()

  const [fetchedData, setFetchedData] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        );
        console.log(data);
        setFetchedData(data);
      } catch (error) {
        console.log("Erro occur in dynamic routing page:: ", error);
      }
      finally{
        setLoading(false)
      }
    };

    fetchData();
  }, [params.id]);

  return (
    loading?"loading....":
    <div className="h-screen bg-black text-white p-4">

        <button
        onClick={()=>navigate('/')
        }
        className="px-3 py-1 rounded-md bg-blue-500 cursor-pointer">Back</button>

      <div className="h-full flex flex-col items-center justify-center gap-5">
        <h1 className="font-semibold text-md">id:{fetchedData.id}</h1>
        <h1 className="font-semibold text-xl">{fetchedData.title}</h1>

        <p className="text-sm">{fetchedData.body}</p>
      </div>
    </div>
  );
};

export default CardDetails;
