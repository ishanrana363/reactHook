import { useState } from "react";
import UseEffectRun from "./UseEffectRun";

const UseEffectCleanUp = () => {
    const [display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>{
                setDisplay(!display)
            }} >ToggleDisplay</button>
            {display && <UseEffectRun/> }
        </div>
    );
};

export default UseEffectCleanUp;