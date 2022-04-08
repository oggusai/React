import React,{ useState } from 'react'

function UseStateHook(){
    
    const [count,setCount]= useState(0);

    const handleIncrement = ()=>{
        setCount(count+15);

    }
    const handleDecrement=()=>{
        setCount(count-10);
    }
          
   

  return (

    <div>
        <h2>Counter</h2>
        <h2>Count: {count}</h2>

        <button className="btn btn-primary me-4" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-primary" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseStateHook