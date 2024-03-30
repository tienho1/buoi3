import React, { useState } from 'react';

const Calculator = () => {
    const [Number,setNumber]=useState()
    return (
        <div>
            <input value={Number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick={()=>setNumber(this)} value={1}>1</button>
            <button onClick={()=>setNumber(2)}>2</button>
            <button onClick={()=>setNumber(3)}>3</button>
            <button onClick={()=>setNumber(4)}>4</button>
            <button onClick={()=>setNumber(5)}>5</button>
            <button onClick={()=>setNumber(6)}>6</button>
            <button onClick={()=>setNumber(7)}>7</button>
            <button onClick={()=>setNumber(8)}>8</button>
            <button onClick={()=>setNumber(9)}>9</button>
            <button>+</button>
            <button>-</button>
            <button>X</button>
            <button>/</button>
        </div>
    );
}

export default Calculator;
