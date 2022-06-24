import { useState } from "react"

function CounterHoc( Component, Value ) {
    const UpgradeComponent = () => {
    const[Counter, setCounter] = useState(0);
    const HandleCounter = () => setCounter(Counter+Value);
    return(
        <Component Counter={Counter}  HandleCounter={HandleCounter}/>
    )
    }
    return UpgradeComponent;
}

export default  CounterHoc;