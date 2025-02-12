import { useState } from "react"



export default function Counter(){
    const[ count, setCount]=useState(0);

    const increment =()=>{
        setCount(count +1);
    };
    
    const decrement = ()=>{
        if(count >0){
            setCount(count -1);
        }
        else{
            alert('Zero Limit Reached');
            setCount(0);
        }
    };
     const  reset =()=>{
        setCount(0);
      }
    
    return(<>
       <h1>Counter App</h1>
       <h2>The counter value is : {count}</h2>

       <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
       </div>

       <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {count}</h1>
      <div>
        {/* Increment Button */}
        <button
          onClick={increment}
          style={{
            margin: "5px",
            padding: "10px 20px",
            color: "white",
            backgroundColor: "green",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          +
        </button>

        {/* Decrement Button */}
        <button
          onClick={decrement}
          style={{
            margin: "5px",
            padding: "10px 20px",
            color: "white",
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          -
        </button>

        {/* Reset Button */}
        <button
          onClick={reset}
          style={{
            margin: "5px",
            padding: "10px 20px",
            color: "white",
            backgroundColor: "blue",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>

    </>)
}