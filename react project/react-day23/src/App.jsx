// import { useState } from "react";
// import { useEffect } from "react";

import { useEffect } from "react";
import { useState } from "react";

// // useeffect hook
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState(0);

//   // useEffect(() => {
//   //   // async function fetchData(){
//   //   //   let data = await fetch('https://randomuser.me/api/')
//   //   //   let response = data.json()
//   //   //   console.log(response)
//   //   // }

//   //   // fetchData()
//   //   console.log('i am a use effect', count, name)
//   // },[count, name])

//   const [timer, setTimer] = useState(false);

//   useEffect(() => {
//     let interval
//     if (timer) {
//       interval = setInterval(() => {
//         console.log("hello");
//       }, 1000);
//     }

//     // clearInterval(interval)
//     return () => {
//       clearInterval(interval);
//     };
//   }, [timer]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//       <button onClick={() => setName(name + 2)}>name</button>
//     </div>
//   );
// };

// export default App;



// timer 

// const App = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isRunning]);


//   const resetValue = ()=>{
//     setTime(0)
//     setIsRunning(false)
//   }

//   return (
//     <div>
//       <div>{time}</div>
//       <button onClick={()=>setIsRunning(true)}>start</button>
//       <button onClick={()=>setIsRunning(false)}>stop</button>
//       <button onClick={resetValue}>reset</button>
//     </div>
//   );
// };

// export default App;


// live clock 



const App = () => {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date())
    }, 1000);
  
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>Live Clock :</h1>
      <h2>{time.getHours()} : {time.getMinutes()} : {time.getSeconds()}</h2>
    </div>
  )
}

export default App
