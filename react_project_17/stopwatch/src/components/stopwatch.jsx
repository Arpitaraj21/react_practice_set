import React, { useEffect, useRef, useState } from "react";

function StopWatch() {

    // store the time in a state variable 
    const [time, setTime] = useState(0);

    // store the value whether it is runing or not 
    const [isRunning, setIsRunning] = useState(false);

    // using useRef we store the current time
    const intervalRef = useRef(null);


    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current)
    }, [isRunning]);


    const handleStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    }

    // const formatTime

    const formatTime = () => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = (time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    console.log(formatTime)
    return (
        <>
            <p>StopWatch</p>
            <p>time: {formatTime()} </p>

            <button onClick={handleStart} disabled={isRunning}>Start</button>
            <button onClick={handleStop} disabled={!isRunning}>Stop</button>
            <button onClick={handleReset}>Reset</button>

        </>
    );
}

export default StopWatch;