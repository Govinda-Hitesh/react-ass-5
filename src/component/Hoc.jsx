import "./css.css"
import CompA from "./leftClick";
import CompB from "./mouseOver";
const Hoc = () => {
    return(
        <div className="HComplete">
            <h1 className="Heading">Higher Order Component</h1>
            <div className="Pure">
            <ul>
                <li>
                    Higher order components are called as Hoc
                </li><br/>
                <li>
                A Higher-Order component is a function that takes a component and returns a new component by adding additional functionalities to the component. HOC is wrapped in the original component.
                </li><br/>
                <li>
                    Higher order components provides reusability 
                </li><br/>
                <li>
                    We use This syntax to use Hoc in another component "const EnhancedComponent = higherOrderComponent(WrappedComponent);".
                </li><br/>
            </ul>
            </div>
            <div className="example">
                <CompA />
                <CompB />
            </div>
        </div>
    )
}

export default Hoc;