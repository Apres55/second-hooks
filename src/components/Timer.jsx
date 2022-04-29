import React, {useState, useEffect} from "react";

let timerID;

let Timer = ({startTime, onTick, step, autostart}) => {
    const [time, setTime] = React.useState(startTime);
    const [pause, setPause] = React.useState(!autostart);

    React.useEffect(() => {
        if(!pause) {
            timerID = setInterval(() => {
                setTime((prev) => prev - 1)
                onTick(time)
            }, step)

            return () => {
                clearInterval(timerID)
            }
        }
    }, [time, pause])

    return (
        <div>
            <p className="timerOne">{time}</p>
            <button onClick={() => setPause(false)}>start</button>
            <button onClick={() => setPause(true)}>stop</button>
        </div>
    )
}

export default Timer

