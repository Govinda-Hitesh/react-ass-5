import CounterHoc from "./hocComponent";

function CompA(Props){
    const { Counter , HandleCounter }= Props;
    return(
        <div>
        <h1>Counter: {Counter}</h1>
        <button onClick={HandleCounter}>Click</button>
        </div>
    )
}
const EnhancedClickCounter = CounterHoc(CompA,1);

export default EnhancedClickCounter;
