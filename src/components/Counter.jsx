import React, { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>{count}</h1>

            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    );
}
export default Counter;


