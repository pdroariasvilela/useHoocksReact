import { useEffect, useState } from "react";

function Message() {

    const [coords , setCoords ]= useState({
          x: 0,
          y: 0
      })

    useEffect(()=>{


        const mouseMove = ({x , y})=>{
            // const coords = { x , y }
            // console.log(coords)

            setCoords({ x , y })
        }
        
        window.addEventListener('mousemove', mouseMove)

        return () => {
         window.removeEventListener('mousemove', mouseMove)
        }
    },[])

    return ( 
        <>
            <h3>El usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
}

export default Message;