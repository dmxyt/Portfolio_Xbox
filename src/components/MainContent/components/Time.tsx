import { useState, useEffect } from "react";

export default function TimeUpdated() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <b>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </b>
        </>
    )
}