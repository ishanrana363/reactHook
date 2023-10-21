import { useEffect, useState } from "react";

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('')
    useEffect(()=>{
        document.title = `You click ${count} times `
        console.log("use effect updating title")
    },[count])
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }} >Addd</button> <br /> <br />
            <button onClick={()=>{
                setCount(0)
            }} >
                Reset 
            </button> <br /> <br />
            <input type="text" value={name} onChange={e=>setName(e.target.value)} name="" id="" />
        </div>
    );
};

export default UseEffect;