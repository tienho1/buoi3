import React, { useState } from 'react';

const Hook4 = () => {
    const [City, setCity]= useState("Hồ Chí Minh")
    return (
        <div>
            <input placeholder='Enter Your City' value={City} onChange={(e)=>setCity(e.target.value)} ></input>
            <p>City: {City}</p>
        </div>
    );
}

export default Hook4;
