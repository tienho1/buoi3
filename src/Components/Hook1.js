import React, { useState } from 'react';

const Hook1 = () => {
    const [count,setCount]=useState(1)
    const handle_up=()=>{
        setCount(count+1)
    }
console.log("reander Hook1")
    return (
        <div>
            <p1>Count: {count}</p1>
            <button onClick={handle_up}>Handle_up</button>

        </div>
    );
}

export default Hook1;
