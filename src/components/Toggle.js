import { useState } from "react";
 
 const Toggle = ({text}) => {
    const [boolToggle, setBoolToggle] = useState(false);
    const set = () => {
        if(boolToggle === false) {
            setBoolToggle(true);
        } else {
            setBoolToggle(false);
        }
    }
    return (
        <>
            {text}<button onClick={set}>{boolToggle.toString()}</button>
        </>
    )
}
export default Toggle;