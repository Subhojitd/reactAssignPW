import React,{useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () =>{
    setCounter(counter+1) 
  }
  const decrease = () =>{
    setCounter(counter-1) 
  }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={increase}>Inc</button>
      <p>{counter}</p>
      <button onClick={decrease}>Dec</button>
      
    </>
  );
};

export default Counter;
