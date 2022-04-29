import React from "react";
import "../App.css";
import Timer from "./Timer"
import TimerTwo from "./timerTwo"

let TimerTree = () => {
    const startTime_1 = 10;
    const startTime_2 = 100;
    const autostart = true;
    const onTick=(time) => console.log("Залишилось часу: " + time/1000)

    return (
    <header className="App-header">
        <div className="firstTimer">
            <Timer startTime={startTime_1} step={1000} autostart ={!autostart} onTick={onTick}/>
        </div>
        <div className="firstTimer">
            <TimerTwo startTime={startTime_2} step={2000} autostart ={autostart} onTick={onTick}/>
        </div>
    </header>
    );
}
export default TimerTree

