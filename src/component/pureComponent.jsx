import { useState } from "react";
import "./css.css"
const PureComponent = () => {
    const [name , setName] = useState("Govinda");
    return(
        <div className="complete">
            <h1 className="Heading">Pure Component</h1>
            <div className="Pure">
            <ul>
                <li>
                    React provides PureComponent to Avoid unnecessary rendering the component
                </li><br/>
                <li>
                    It Checks that whether the prevoius state or Props are equals to Current state or Props
                </li><br/>
                <li>
                    If the prevoius state or Props and current state or Props are same it will not rerender the component.
                </li><br/>
                <li>
                    If the both states or Props or not same it will rerender the component.
                </li><br/>
            </ul>
            </div>
            <div className="example">
            <h1>Name: {name}</h1>
            <button onClick={()=>setName("Hitesh")}>Click</button>
            </div>
        </div>
    )
}

export default PureComponent;