import { useState } from "react";
function Counter() {
    let [count, setCount] = useState(0);
    function Increase() {
        setCount(count + 2);
    }
    function Decrease() {
        setCount(count - 2);
    }
    function Reset() {
        setCount(0);
    }
    return (
        <div className="counter">
            <p><h3>Count:{count}</h3></p>
            <p><button onClick={Increase}>Increase</button></p>
            <p><button onClick={Decrease}>Decrease</button><br/></p>
            <p><button onClick={Reset}>Reset</button><br/></p>
        </div>
    )
}
export default Counter;