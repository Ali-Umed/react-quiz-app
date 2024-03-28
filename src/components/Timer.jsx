import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevSecond => prevSecond - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []); 

    return timer;
}

