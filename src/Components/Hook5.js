import React, { useState } from 'react';
import './hook5.css'

const Hook5 = () => {
    const [Ketqua, setKetqua]=useState()
    const [a,seta]=useState()
    const [b,setb]=useState()

    const cong=()=>{
        setKetqua(a*1+b*1)
    }
    const tru=()=>{
        setKetqua(a*1-b*1)
    }
    const nhan=()=>{
        setKetqua(a*1*b*1)
    }
    const chia=()=>{
        setKetqua(a*1/b*1)
    }
    return (
        <div>
            <lable> Nhập A</lable> <input value={a} onChange={(e)=>seta(e.target.value)} />
            <lable> Nhập B</lable> <input value={b} onChange={(e)=>setb(e.target.value)}/>
            <button onClick={cong}>+</button>
            <button onClick={tru}>-</button>
            <button onClick={nhan}>X</button>
            <button onClick={chia}>/</button>
            
            <p id='kq'>Kết Quả: {Ketqua}</p>
        </div>
    );
}

export default Hook5;
