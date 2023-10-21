import { useEffect, useState } from "react";

const UseEffectRun = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const logMousePossition = e =>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect called")
        window.addEventListener("mousemove",logMousePossition);
        return ()=>{
            console.log("component divmount")
            window.removeEventListener("mousemove",logMousePossition)
        }
    },[])
        return (
        <div>
            Hooks x : {x} , y : {y}
        </div>
    );
};

export default UseEffectRun;