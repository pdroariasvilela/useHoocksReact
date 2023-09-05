import { useEffect } from "react"

function Message(){

    useEffect(()=>{
        console.log("Ya existe")
        return () => {
            console.log("Ya no existe")
        }
    })

    return (
        <div>
            <h1>El usuario ya existe</h1>
        </div>
    )

}


export default Message