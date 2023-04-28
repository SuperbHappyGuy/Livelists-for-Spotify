import { useState } from "react";
 
 const Counter = ({text}) => {
    const [number, setNumber] = useState(0);
    const increment = () => {
        setNumber(number + 1);
    }
    return (
        <button onClick={increment}>{text} {number}</button>
    )
}
export default Counter;