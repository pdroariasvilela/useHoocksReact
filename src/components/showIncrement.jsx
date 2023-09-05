import React from 'react';

const ShowIncrement = React.memo(({increment})=>{

    return ( 
        <button onClick={()=>{
            increment()
        }}>
            show increment
        
        </button>
     );
})

export default ShowIncrement;