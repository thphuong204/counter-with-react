import React, { useState } from 'react';
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const color = count > 0 ? "green" : count < 0 ? "red" : "black";
    console.log(count > 0, "color:", color);

    return (
        <div className="container">
            <span> Project Counter </span>
            <div className="mainBoard">
                <div id="title">Counter</div>
                <div id="counter" style={{ color: color }}>{count}</div>
                <div id="action">
                    <button onClick={decrement} className="btn" id="btn-decrease">Decrease</button>
                    <button onClick={reset} className="btn" id="btn-reset">Reset</button>
                    <button onClick={increment} className="btn" id="btn-increase">Increase</button>
                </div>
            </div>
        </div>
    )
}

export default App;