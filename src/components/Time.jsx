import React, { useState } from "react";

const Time = () => {

    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);

    const updateTime = () => {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="container">
            <h2>{time}</h2>
        </div>
    )
}

export default Time