import React, { useState } from 'react';

const Hook2 = () => {
    const [price,setPrice]=useState(20)
    const handle_sale=()=>{
        setPrice(price-2)
    }
    console.log("reander Hook1")
    return (
        <div>
            <p>Price= {price}</p>
            <button onClick={handle_sale}>Sale On</button>
        </div>
    );
}

export default Hook2;
