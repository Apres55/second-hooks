import React, {useState, useEffect} from "react";

let timerIDTwo;

let TimerTwo = ({startTime, step, onTick, autostart}) => {
    const [time, setTime] = React.useState(startTime);
    const [pause, setPause] = React.useState(!autostart);

    React.useEffect(() => {
        if(!pause) {
            timerIDTwo = setInterval(() => {
                setTime((prev) => prev - 2)
                onTick(time)
            }, step)

            return () => {
                clearInterval(timerIDTwo)
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

export default TimerTwo