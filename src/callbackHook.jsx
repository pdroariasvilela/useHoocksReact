import { useCallback, useState } from "react";
import ShowIncrement from "./components/showIncrement";

function CallBackHook() {

    const [ counter , setCounter ]  = useState(1);

    const incrementFather = useCallback(()=>
    {
            console.log("hola")
            setCounter((value)=> value + 1)
    }, []
    )
    

    return ( 
        <div>
            <h1>usecallback hook : {counter}</h1>
            <ShowIncrement increment = {incrementFather}/>
        </div>
     )

    }


export default CallBackHook;
