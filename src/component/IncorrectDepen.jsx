import { useEffect, useState } from "react";

const IncorrectDepen = () => {
    const  [count,setCount] = useState(0);
    const tick = ()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return () =>{
            clearInterval(interval)
        }
    },[count])
    return (
        <div style={{marginLeft:"50%"}} >
            {count}
        </div>
    );
};

export default IncorrectDepen;