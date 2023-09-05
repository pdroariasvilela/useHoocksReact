import { useState } from "react"

export const  useCounter = (initialValue = 0)=>{

    const [counter, setCounter] = useState(initialValue)

    const incremental = (value = 1) =>{
        setCounter(counter + value)
    }

    const decrement = (value = 1) =>{
        setCounter(counter - value)
    }

    const reset = ()=>{
        setCounter(initialValue)
    }

    return {
        counter,
        incremental,
        decrement,
        reset
    }

}



// function App() {

//     const { counter, incremental , decrement , reset} = useCounter(34)
  
//     return (
//       <>
//         <h1>App Counter</h1>
//         <hr />
//         <h2>Counter: {counter}</h2>
//         <button onClick={() =>incremental(30)}>+1</button>
//         <button onClick={() => decrement(4)}>-1</button>
//         <button onClick={reset}>Reset</button>
//       </>
//     )