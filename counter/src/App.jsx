import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase =()  => setCount(count + 1)

  const decrease =() => {
    if(count>0){
      setCount(count - 1)
    }
  }
  return (
    <>
      <div className="w-full h-screen bg-gray-600 flex items-center justify-center">
        <div className="w-[320px] h-[380px] bg-gray-900 rounded-md flex items-center justify-center flex-col gap-10">
            <h1 className="text-white text-8xl " >{count}</h1>
          <div className="flex items-center justify-center gap-6">
            <button onClick={decrease} className="w-[70px] h-10 bg-blue-600 text-4xl  text-white -p-2 rounded-lg  "   > - </button>
            <button onClick={increase} className="w-[70px] h-10 -p-2 bg-blue-600 text-4xl  text-white   rounded-lg  "   > + </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
