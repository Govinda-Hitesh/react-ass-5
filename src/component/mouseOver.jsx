import CounterHoc from "./hocComponent";


function CompC(Props){
    const{Counter , HandleCounter} = Props;
    return(
            <div>
            <h1 onMouseOver={HandleCounter}>On mouse over Counter: {Counter}</h1>
            </div>
    )
}

const EnhancedClickCounter = CounterHoc(CompC,-2);


export default EnhancedClickCounter;