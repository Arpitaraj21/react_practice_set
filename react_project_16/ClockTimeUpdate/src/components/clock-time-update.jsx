import React, { useEffect, useState } from "react";

export default function ClockTimeUpdate() {
    // create a state variable using useState
    const [time, setTime] = useState(new Date());

    // in js is a constructor used to create a new date object
    console.log("new date", new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date()); // update time every second
        }, 1000);

        // cleanup: clear interval when component unmounts
        return () => clearInterval(timer);
        // empty dependency array
    }, []); // empty dependency array  = runs once on mount

    return (
        <div>
            <h4>Clock with time update</h4>
            {/* display time in locale-specific format */}
            {time.toLocaleTimeString()}
        </div>
    )
}