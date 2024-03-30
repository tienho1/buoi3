import React, { useState } from 'react';

const Hook3 = () => {
    const [Student,setStudent]= useState({Name:"Hoàng Nguyên", age:19})
    const change_name=()=>{
        setStudent({...Student,Name:"Hoàng Hồn"})
    }
    const change_age=()=>{
        setStudent({...Student,age:50})
    }
    return (
        <div>
            <p>Name: {Student.Name}</p>
            <p>Age: {Student.age}</p>
            <button onClick={change_name}>Change Name</button>
            <button onClick={change_age}>Change Age</button>
            
        </div>
    );
}

export default Hook3;
